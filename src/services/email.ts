export interface EmailResponse {
  success: boolean;
  message?: string;
}

export async function sendEmail(email: string, message: string): Promise<EmailResponse> {
  try {
    // Simulated email sending
    console.log('Sending email:', { email, message });
    return { 
      success: true,
      message: 'Mensaje enviado con éxito'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false,
      message: 'No se pudo enviar el mensaje'
    };
  }
}