import React, { useState } from 'react';

import Button from 'components/buttons/Button';
import ToastDanger from 'components/toasts/ToastDanger';
import ToastSuccess from 'components/toasts/ToastSuccess';

import { downloadFile } from 'handler/DownloadFile';
import { FormData, FormErrors, hasErrors, validateField } from 'utils/validation/FormValidation';
import ContactFormInput from '../../about-us/contact-us/partials/ContactFormInput';

interface ContactFormProps {
  fileDownload: string;
}

const initialFormData: FormData = {
  fullname: '',
  email: '',
  whatsapp: '',
  industry: '',
  careerRole: '',
};

const ContactForm = ({ fileDownload }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toasts, setToasts] = useState<Array<{ id: number; type: 'success' | 'danger'; message: string }>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      const whatsappWithoutSpaces = value.replace(/\s/g, '');
      setFormData({ ...formData, whatsapp: whatsappWithoutSpaces });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (isSubmitted) {
      const newErrors = validateField({ ...formData, [name]: value });
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(true);

    const formValidationErrors = validateField(formData);
    setErrors(formValidationErrors);

    if (hasErrors(formValidationErrors)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/resourceSubmitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      await response.json();

      addToast('success', 'Submit Successfully.');
      // window.open(fileDownload, '_blank');
      downloadFile(fileDownload, 'template-cv-hra.pdf');

    } catch (error) {
      addToast('danger', 'An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addToast = (type: 'success' | 'danger', message: string) => {
    const newToast = { id: Date.now(), type, message };
    setToasts((prevToasts) => [newToast, ...prevToasts]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-3">
        <ContactFormInput label="Full Name" name="fullname" required placeholder="Lee Min Ho" value={formData.fullname} onChange={handleChange} />
        {isSubmitted && errors.fullname && <p className="text-red-600 text-sm">{errors.fullname}</p>}
        <ContactFormInput label="Email" name="email" required placeholder="example@gmail.com" value={formData.email} onChange={handleChange} />
        {isSubmitted && errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        <ContactFormInput label="WhatsApp Number" name="whatsapp" required placeholder="+62 345 678 910" value={formData.whatsapp} onChange={handleChange} />
        {isSubmitted && errors.whatsapp && <p className="text-red-600 text-sm">{errors.whatsapp}</p>}
        <ContactFormInput label="Industry" name="industry" required placeholder="Banking" value={formData.industry} onChange={handleChange} />
        {isSubmitted && errors.industry && <p className="text-red-600 text-sm">{errors.industry}</p>}
        <label htmlFor="careerRole" className="block text-sm font-medium leading-6 text-gray-900">Where Are You In Your Career <span className="text-red-600">*</span></label>
        <select required name="careerRole" id="careerRole" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-8.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={formData.careerRole} onChange={handleChange}>
          <option value="" disabled>Select an option</option>
          <option value="Student (< 1 Tahun)">Student ({'<'} 1 Tahun)</option>
          <option value="Early Career (1 - 5 Years)">Early Career (1 - 5 Years)</option>
          <option value="Professionals (6+ years)">Professionals (6+ years)</option>
        </select>
        {isSubmitted && errors.careerRole && <p className="text-red-600 text-sm">{errors.careerRole}</p>}
        <div className="w-full mt-3">
          <Button type="submit" variant="yellow" size="base" className="w-full flex justify-center border-none" disabled={isSubmitting}>Submit Enquiry</Button>
        </div>
      </form>
      <div className="fixed top-24 right-5">
        {toasts.map((toast) => (
          <div key={toast.id} className={`mt-2 ${toast.type === 'success' ? 'toast-success' : 'toast-danger'}`}>
            {toast.type === 'success' ? (
              <ToastSuccess
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            ) : (
              <ToastDanger
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactForm;
