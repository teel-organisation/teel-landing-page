export const useEmail = () => {
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const success = ref(false);

  const sendEmail = async (to: string, subject: string, message: string) => {
    isLoading.value = true;
    error.value = null;
    success.value = false;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, message }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to send email");
      }

      success.value = true;
      return result;
    } catch (e) {
      error.value =
        e instanceof Error ? e.message : "An unknown error occurred";
      throw e;
    } finally {
      isLoading.value = false;
    }
  };

  const resetState = () => {
    isLoading.value = false;
    error.value = null;
    success.value = false;
  };

  return {
    isLoading,
    error,
    success,
    sendEmail,
    resetState,
  };
};
