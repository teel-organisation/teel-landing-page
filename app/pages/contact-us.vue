<script setup lang="ts">
import { html } from "~/constants";

const { sendEmail } = useEmail();
const config = useRuntimeConfig();
const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const send = async () => {
  const emailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
        }
        .header {
            background-color: #000000;
            padding: 20px;
            text-align: center;
        }
        .logo {
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
            border: 1px solid #eeeeee;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #555555;
        }
        .value {
            margin-top: 5px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #999999;
        }
        .message-box {
            background-color: #ffffff;
            padding: 15px;
            border: 1px solid #eeeeee;
            border-radius: 4px;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Teel</div>
        </div>
        
        <div class="content">
            <h2>New Contact Form Submission</h2>
            <p>You have received a new message from your website contact form.</p>
            
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${form.name}</div>
            </div>
            
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">${form.email}</div>
            </div>
            
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${form.phone}</div>
            </div>
            
            <div class="field">
                <div class="label">Message:</div>
                <div class="value message-box">${form.message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated email from your Teel website contact form.</p>
            <p>&copy; 2025 Teel. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;

  await sendEmail(
    config.public.EMAIL_SENDER,
    "New Contact Form Submission",
    emailTemplate
  );
};
</script>

<template>
  <Navbar />
  <div class="relative z-10 max-w-7xl mx-auto min-h-[70vh] px-4 md:px-6">
    <div class="pt-20 md:pt-44 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
      <!-- Left column with negative margin to shift everything left -->
      <div class="ml-[-30px] md:ml-[-50px]">
        <div>
          <h4 class="text-gray-400">Contact Info</h4>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-extrabold font-cab text-gray-900 mt-4"
          >
            Get in Touch
          </h2>
          <p
            class="text-gray-800 font-light mt-7 leading-relaxed text-base md:text-base tracking-wider max-w-lg"
          >
            Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.
          </p>
        </div>
        <div class="space-y-8 mt-16 font-mont">
          <div class="flex items-center gap-x-4 text-base md:text-lg">
            <Icon name="bxs:phone" class="text-black text-xl flex-shrink-0" />
            <p class="text-gray-600">+1205 5872 321</p>
          </div>
          <div class="flex items-center gap-x-5">
            <Icon
              name="bxs:envelope"
              class="text-black text-xl flex-shrink-0"
            />
            <p class="text-gray-600">support@teelapp.com</p>
          </div>
          <div class="flex items-start gap-x-5">
            <Icon
              name="bxs:map"
              class="text-black text-xl flex-shrink-0 mt-1"
            />
            <p class="text-gray-600">
              51 Bracken Road, Sandyford, Dublin, DUBLIN, D18 CV48, Ireland
            </p>
          </div>
        </div>
        
        <div class="flex gap-x-7 mt-20">
          <Icon name="bxl:twitter" class="text-black text-xl" />
          <Icon name="bxl:instagram" class="text-black text-xl" />
          <Icon name="icon-park-outline:dribble" class="text-black text-xl" />
          <Icon name="bxl:facebook" class="text-black text-xl" />
        </div>
      </div>
      <div class="mt-10 md:mt-0">
        <h4 class="text-gray-400">Details:</h4>
        <input
          type="text"
          placeholder="First Name"
          v-model="form.name"
          class="bg-white border-black border px-3 py-2.5 text-lg outline-none mt-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          v-model="form.email"
          class="bg-white border-black border px-3 py-2.5 text-lg outline-none mt-6 w-full"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          v-model="form.phone"
          class="bg-white border-black border px-3 py-2.5 text-lg outline-none mt-6 w-full"
        />
        <textarea
          class="bg-white border-black border px-3 py-2.5 text-lg outline-none mt-6 w-full h-32"
          placeholder="Your Message"
          v-model="form.message"
        ></textarea>
        <button
          @click="send"
          class="bg-black text-white px-10 py-2.5 text-lg mt-6 w-full md:w-72"
        >
          Send Message
        </button>
      </div>
    </div>
    <div class="pb-20 md:pb-32"></div>
  </div>
  <img
    src="/error/glow.png"
    class="absolute right-0 top-0 w-[60%] md:w-[40%] -z-10"
    alt=""
  />
  <Footer />
</template>