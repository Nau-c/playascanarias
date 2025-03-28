export const sendContactEmail = async (email: string, message: string) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Error sending email');
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};