import { motion, useInView } from "framer-motion";
import "./contact.scss";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { EmailjsConfig } from "../emailjs";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

const contact = () => {
  const refs = useRef() as React.MutableRefObject<HTMLDivElement>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };

      await emailjs.send(
        EmailjsConfig.serviceId,
        EmailjsConfig.templateId,
        templateParams,
        EmailjsConfig.userId
      );

      // Reset the form after successful submission
      reset();

      toast.success("Email sent successfully!", {
        autoClose: 5000,
        style: { background: "#022507", color: "#ffffff" }, // Customize style for success
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Sorry! Mail not sent.", {
        autoClose: 5000,
        style: { background: "#e74c3c", color: "#ffffff" }, // Customize style for error
      });
    }
  };

  const inView = useInView(refs, { margin: "-100px" });

  return (
    <>
      <motion.div
        className="contact"
        ref={refs}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Let's work together</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>mdaskar40@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>Pudupet, Chennai 600-002, India</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>phone</h2>
            <span>+91 7550104231</span>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            viewport={{ once: true }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="450px"
              height="450px"
              viewBox="0 0 352 254"
              fill="none"
              className="path"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={inView && { pathLength: 1 }}
                transition={{ duration: 12 }}
                viewport={{ once: true }}
                d="M352 0H66V79.375H0V254H154V206.375H352V0ZM132 15.875H330V31.75H132V15.875ZM88 15.875H110V31.75H88V15.875ZM88 238.125H66V222.25H88V238.125ZM132 206.375H22V95.25H132V206.375ZM330 190.5H154V79.375H88V47.625H330V190.5Z"
                fill="none"
                fill-opacity="0.6"
              />
            </svg>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                })}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <p className="error_message">{`${errors.name.message}*`}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <p className="error_message">{`${errors.email.message}`}</p>
              )}
            </div>
            <div>
              <textarea
                rows={8}
                placeholder="Message"
                {...register("message", {
                  required: "Message is required",
                })}
                className={errors.message ? "error" : ""}
              />
              {errors.message && (
                <p className="error_message">{`${errors.message.message}`}</p>
              )}
            </div>
            <button>Submit</button>
          </motion.form>
          <ToastContainer />
        </div>
      </motion.div>
    </>
  );
};

export default contact;
