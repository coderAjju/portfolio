import { TbSend2 } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    reset(); // Reset form fields after successful submission
  };
  return (
    <div className="container mx-auto" id="contact">
      <h2 className="text-3xl font-semibold text-center">ContactForm</h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 max-w-2xl mx-auto flex gap-8 flex-col"
      >
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-5">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className={` w-full md:w-1/2 bg-transparent  py-3 px-2 rounded-lg border border-stone-400 ${
              errors.name ? "border-red-500" : "border-gray-300"
            } `}
            {...register("name", { required: "Name is required." })}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            className={` w-full md:w-1/2 bg-transparent  py-3 px-2 rounded-lg border border-stone-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } `}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email.",
              },
            })}
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            rows={5}
            cols={10}
            placeholder="Write your message..."
            className={`w-full bg-transparent  py-3 px-2 rounded-lg border border-stone-400 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            {...register("message", { required: "Message is required." })}
          ></textarea>
        </div>
        <button className="w-full bg-white text-black flex gap-2 items-center justify-center py-1 rounded-md">
          Send <TbSend2 />
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
