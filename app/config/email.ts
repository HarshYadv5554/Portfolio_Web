"use client";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("P5ywu7iErLS3ZcGOf");

export const emailConfig = {
    serviceId: "service_vjba4kd", // Your service ID
    templateId: "template_gwdad5g", // Your template ID
    publicKey: "P5ywu7iErLS3ZcGOf",
    toEmail: "harsh153658@gmail.com",
    toName: "Harsh Yadav"
}; 