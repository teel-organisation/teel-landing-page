<template>
  <section id="hero" class="relative w-full overflow-hidden pt-20 lg:pt-0">
    <div class="relative py-10 sm:py-16 md:py-36 lg:py-30 overflow-x-hidden">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <div class="mb-8 flex justify-center items-center lg:hidden">
            <div class="border rounded-3xl overflow-hidden">
              <img
                src="/hero/hero.png"
                class="object-cover w-auto max-h-96"
                alt=""
              />
            </div>
          </div>
          <div
            class="relative z-10 text-center max-w-4xl mx-auto lg:-ml-5 lg:text-left lg:w-[70%]"
          >
            <h1
              class="font-cab text-[#1B2025] font-extrabold lg:leading-[110px] text-3xl sm:text-4xl md:text-5xl lg:text-[84px] lg:tracking-[-0.100px] lg:pt-28"
            >
              Pay with Teel. <br />
              Payments Simplified.
            </h1>
            <p
              class="mt-4 font-open font-thin sm:mt-6 md:mt-10 lg:mt-16 text-[#626466] text-base sm:text-[19px] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Built for a new generation of customers, making payment management
              simple, social, and fast. <br />
              It's fun, it's seamless. If there's a payment, just Teel it.
            </p>

            <div>
              <div id="waitlist-input" class="max-w-2xl mx-auto lg:ml-0 lg:mr-auto my-6 sm:my-8 md:my-10 lg:my-12">
                <div class="relative grid grid-cols-[1fr_auto] items-center border border-gray-200 pr-4 shadow shadow-gray-950/5 outline-none rounded-full w-full">
                  <input
                    ref="emailInput"
                    autocomplete="email"
                    v-model="email"
                    placeholder="Enter your email"
                    class="h-16 pl-8 placeholder:text-gray-400 placeholder:font-normal placeholder:font-inter w-full bg-transparent focus:outline-none text-sm sm:text-base"
                    type="email"
                  />
                  <div class="pr-1 py-2.5">
                    <button
                      @click="sendMail"
                      :disabled="loading || submit"
                      class="bg-[#3C3C43] text-white px-9 py-2.5 rounded-full text-base font-medium whitespace-nowrap"
                    >
                      <span>
                        {{
                          loading
                            ? "Submitting..."
                            : submit
                            ? "Done! Check your email"
                            : "Join Waitlist"
                        }}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="/hero/hero.png"
            class="object-cover absolute z-10 right-0 h-[70vh] hidden lg:block"
            alt="project illustration"
            loading="lazy"
          />
        </div>
        <img
          src="/ellipse.png"
          class="object-cover w-[40%] right-0 h-full absolute top-0 hidden lg:block"
          alt="background element"
          loading="lazy"
        />
      </div>

      <div class="mt-12 sm:mt-16 md:mt-20">
        <h3
          class="text-center font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[30px] lg:leading-[100%] tracking-[-0.91px] font-cab"
        >
          Platform Partners
        </h3>
        <div
          class="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-6 px-4"
        >
          <img
            src="/sponsers/image.png"
            class="object-cover w-auto h-4 sm:h-5 md:h-9 relative z-10"
            alt="Partner logo"
          />
          <img
            src="/sponsers/image2.png"
            class="object-cover w-auto h-4 sm:h-5 md:h-9 relative z-10"
            alt="Partner logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { sendEmail } = useEmail();
const email = ref("");
const loading = ref(false);
const submit = ref(false);
const emailInput = ref(null);

// Method to focus on the email input field
const focusEmailInput = () => {
  if (emailInput.value) {
    emailInput.value.focus();
  }
};

// Check if the URL has a specific hash that indicates scrolling to the hero
onMounted(() => {
  if (window.location.hash === '#hero') {
    // Use nextTick to ensure the DOM is fully rendered
    nextTick(() => {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Focus on the email input after scrolling
      setTimeout(focusEmailInput, 800); // Small delay to ensure smooth scroll completes
    });
  }
});

const sendMail = async () => {
  if (!email.value) {
    alert("Please enter your email address.");
    return;
  }
  loading.value = true;
  const emailContent = `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Waitlist Confirmation</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }

      .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #eaeaea;
        }
        .logo {
            width: 180px;
            height: auto;
        }
    
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .email-header {
      background-color: #000000;
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    .email-header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 500;
    }
    
    .email-body {
      padding: 30px;
      text-align: center;
    }
    
    .email-info {
      background-color: #f5f5f5;
      border-radius: 4px;
      padding: 15px;
      margin: 20px 0;
      text-align: left;
      border-left: 3px solid #000000;
    }
    
    .thank-you {
      font-size: 16px;
      margin: 20px 0;
      font-weight: 500;
    }
    
    .footer {
      background-color: #f5f5f5;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #666;
      border-top: 1px solid #eeeeee;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>You're on the Waitlist</h1>
    </div>
     <div class="header">
        <img src="https://teel.vercel.app/logo.png" alt="Teel App Logo" class="logo">
        <h1>New Contact Form Submission</h1>
    </div>
    
    <div class="email-body">
      <p>Your spot has been reserved.</p>
      
      <div class="email-info">
        <p><strong>Your Information:</strong></p>
        <p>Email: <strong>${email.value}</strong></p>
      </div>
      
      <p class="thank-you">Thank you for joining our waitlist!</p>
      
      <p>We'll notify you as soon as you're granted access.</p>
    </div>
    
    <div class="footer">
      <p>© 2025 Your Company. All rights reserved.</p>
      <p>If you didn't request to join this waitlist, please disregard this email.</p>
    </div>
  </div>
</body>
</html>
  `;

  await sendEmail(email.value, "New Email Subscription", emailContent);
  loading.value = false;
  submit.value = true;
};
</script>