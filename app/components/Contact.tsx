"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";
import { emailConfig } from "../config/email";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [errors, setErrors] = useState<{[key: string]: string}>({});
	const [success, setSuccess] = useState(false);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const validateForm = () => {
		const newErrors: {[key: string]: string} = {};
		
		if (!form.name.trim()) {
			newErrors.name = "Name is required";
		}
		
		if (!form.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			newErrors.email = "Please enter a valid email address";
		}
		
		if (!form.message.trim()) {
			newErrors.message = "Message is required";
		}
		
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: "" }));
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setLoading(true);
		setSuccess(false);

		try {
			const response = await emailjs.send(
				emailConfig.serviceId,
				emailConfig.templateId,
				{
					from_name: form.name,
					to_name: emailConfig.toName,
					from_email: form.email,
					to_email: emailConfig.toEmail,
					message: form.message,
				},
				emailConfig.publicKey
			);

			console.log('Email sent successfully:', response);
			setLoading(false);
			setSuccess(true);
			setForm({
				name: "",
				email: "",
				message: "",
			});
			alert("Thank you for reaching out! I will get back to you as soon as possible.");
		} catch (error) {
			console.error('Email error:', error);
			setLoading(false);
			setSuccess(false);
			alert("Sorry! Something went wrong. Please try again later.");
		}
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h3 className="heroHeadText">Contact.</h3>

				<div className="mt-8 space-y-4">
					<div className="flex items-center space-x-4">
						<a href={`mailto:${emailConfig.toEmail}`} className="text-white hover:text-[#915EFF] transition-colors">
							Email: {emailConfig.toEmail}
						</a>
					</div>
					<div className="flex items-center space-x-4">
						<a href="https://linkedin.com/in/harsh-yadav5554" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
							LinkedIn: linkedin.com/in/harsh-yadav5554
						</a>
					</div>
					<div className="flex items-center space-x-4">
						<a href="https://github.com/HarshYadv5554" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
							GitHub: github.com/HarshYadv5554
						</a>
					</div>
					<div className="flex items-center space-x-4">
						<a href="https://leetcode.com/HarshYadav" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
							LeetCode: Harsh Yadav
						</a>
					</div>
				</div>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
								errors.name ? 'ring-2 ring-red-500' : ''
							}`}
						/>
						{errors.name && (
							<span className="text-red-500 text-sm mt-1">{errors.name}</span>
						)}
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
								errors.email ? 'ring-2 ring-red-500' : ''
							}`}
						/>
						{errors.email && (
							<span className="text-red-500 text-sm mt-1">{errors.email}</span>
						)}
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
								errors.message ? 'ring-2 ring-red-500' : ''
							}`}
						/>
						{errors.message && (
							<span className="text-red-500 text-sm mt-1">{errors.message}</span>
						)}
					</label>
					<button
						type="submit"
						className={`py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-colors ${
							loading 
								? 'bg-gray-500 cursor-not-allowed'
								: success
								? 'bg-green-500 hover:bg-green-600'
								: 'bg-tertiary hover:bg-[#915EFF]'
						}`}
						disabled={loading}
					>
						{loading ? "Sending..." : success ? "Sent!" : "Send"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
