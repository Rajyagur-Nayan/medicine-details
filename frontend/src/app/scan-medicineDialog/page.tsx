"use client";
import React, { useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function ScanMedicine() {
  const [medicineName, setMedicineName] = useState("");
  const [medicineCode, setMedicineCode] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("medicine_name", medicineName);
    formData.append("medicine_code", medicineCode);
    if (uploadedFile) {
      formData.append("image", uploadedFile);
    }

    try {
      const res = await fetch("http://localhost:8080/scan", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();
      setResult(data);
      if (!res.ok) throw new Error("Failed to analyze medicine.");

      setMedicineName("");
      setMedicineCode("");
      setUploadedFile(null);
      setUploadedImage(null);
    } catch (error: any) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 space-y-10">
      {/* Upload Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-xl backdrop-blur-md border border-gray-200 dark:border-gray-800 space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent">
          🧪 Scan Your Medicine
        </h2>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-gray-700 dark:text-gray-300">
              Medicine Name
            </Label>
            <Input
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="Enter medicine name"
              className="rounded-xl border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-700 dark:text-gray-300">
              Medicine Code
            </Label>
            <Input
              value={medicineCode}
              onChange={(e) => setMedicineCode(e.target.value)}
              placeholder="Enter code"
              className="rounded-xl border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-3">
          <Label className="text-gray-700 dark:text-gray-300">
            Upload Medicine Image
          </Label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="cursor-pointer rounded-xl border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500"
          />

          {uploadedImage && (
            <motion.div
              className="w-36 h-36 relative mt-4 rounded-xl overflow-hidden shadow-lg ring-2 ring-emerald-500"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Image
                src={uploadedImage}
                alt="Preview"
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </div>

        {/* Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-lg font-medium bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Upload className="w-5 h-5" />
              Scan Now
            </>
          )}
        </Button>
      </motion.form>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            key="result"
            className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 mb-10 dark:from-gray-900 dark:to-gray-800 shadow-2xl border border-emerald-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
                  ✅ Analysis for {result.medicine_name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Summary:</strong>{" "}
                  {String(result?.data?.summary || "N/A")}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Conclusion:</strong>{" "}
                  {String(result?.data?.conclusion || "N/A")}
                </p>

                {result.data.possible_fake_reasons?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <strong className="text-red-600 dark:text-red-400">
                      ⚠ Possible Fake Reasons:
                    </strong>
                    <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      {result.data.possible_fake_reasons.map(
                        (reason: string, idx: number) => (
                          <motion.li
                            key={idx}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            {reason}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
