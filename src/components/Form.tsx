import React, {useState} from "react";

export function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', name);
    formData.append('Telefone', phone);
    formData.append('email', email);
    formData.append('mensagem', message);

    try {
      const response = await fetch('http://localhost:8080/portfolio/server/sendEmail.php', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      setStatus(data.message);
    } catch (error) {
      console.error('Erro ao enviar o formulário', error);
      setStatus('Erro ao enviar. Tente novamente.');
    }
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <label htmlFor="name" className="sr-only">Nome</label>
      <input
        id="name"
        name="name"
        className='bg-white rounded-lg shadow p-3'
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="phone" className="sr-only">Telefone</label>
      <input
        id="phone"
        name="phone"
        className='bg-white rounded-lg shadow p-3'
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <label htmlFor="email" className="sr-only">Email</label>
      <input
        id="email"
        name="email"
        className='bg-white rounded-lg shadow p-3'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message" className="sr-only">Mensagem</label>
      <textarea
        id="message"
        name="message"
        className='bg-white rounded-lg shadow p-3'
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        className='bg-[#21374B] text-white rounded-lg shadow p-3 hover:bg-[#0d1721]'
        type="submit"
        aria-label="Enviar mensagem de contato"
      >
        ENVIAR MENSAGEM
      </button>
      {status && <p>{status}</p>}
    </form>
  )
}