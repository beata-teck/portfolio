export const useContactForm = () => {
  const form = reactive({
    name: '',
    email: '',
    message: ''
  });

  const isSubmitting = ref(false);
  const submitted = ref(false);

  const canSubmit = computed(() => {
    return (
      form.name.trim().length > 1 &&
      form.email.trim().length > 3 &&
      form.message.trim().length > 10 &&
      !isSubmitting.value
    );
  });

  const reset = () => {
    form.name = '';
    form.email = '';
    form.message = '';
    submitted.value = false;
  };

  const submit = async () => {
    if (!canSubmit.value) return;
    isSubmitting.value = true;

    // UI-only submission: simulate a short delay for a production-like feel.
    await new Promise((resolve) => setTimeout(resolve, 500));

    submitted.value = true;
    isSubmitting.value = false;
  };

  return {
    form,
    isSubmitting,
    submitted,
    canSubmit,
    submit,
    reset
  };
};

