import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "chatif476@gmail.com",
      pass: config.EMAIL_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${
        body.toName || config.public.EMAIL_SENDER_NAME
      }" <prelaunch@wcu.ac>`,
      to: body.to,
      subject: body.subject,
      text: body.message,
      html: `<p>${body.message}</p>`,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: (error as Error).message };
  }
});
