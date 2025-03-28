import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Send } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Correo inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Mensaje enviado!",
          description: "Gracias por tu mensaje. Te responderé pronto.",
        });
        reset();
      } else {
        toast({
          title: "Error al enviar el mensaje",
          description: data.error || "Hubo un problema, intenta nuevamente.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error de conexión",
        description: "No se pudo enviar el mensaje, revisa tu conexión.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="flex items-center justify-center w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        {loading ? "Enviando..." : "Enviar Mensaje"}
        {!loading && <Send className="ml-2 h-4 w-4" />}
      </button>
    </form>
  );
}
