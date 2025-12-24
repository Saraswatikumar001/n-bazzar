import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Moon, Sun } from "lucide-react";
import toast, { toaster } from "react-hot-toast";

export default function ContactUs() {
    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark"
    );

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    /* Dark Mode */
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    const validate = () => {
        const err = {};
        if (!form.name) err.name = "Name is Required";
        if (!form.email) err.email = "Email is Required";
        if (!/\S+@\S+\.\S+/.test(form.email))
        if (!form.phone) err.phone = "phone is Required";
        if (!form.message > length) er;

    }
}