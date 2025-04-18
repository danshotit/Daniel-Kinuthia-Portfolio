import { useState } from 'react';
import { useAnimateOnScroll } from '@/utils/animations';
import { cn } from '@/lib/utils';
import {
  Mail, MapPin, Send, Linkedin, Github, Camera, Video, Code, Image, Cloud, Headphones
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, ref] = useAnimateOnScroll(0.1);
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitting: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));

    const serviceID = 'service_6faofgc';
    const templateID = 'template_5itn7kg';
    const publicKey = 'o_mmOy_8trbmo0Xcq';

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormState({
        name: '',
        email: '',
        message: '',
        submitting: false,
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Failed to Send',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
      setFormState(prev => ({ ...prev, submitting: false }));
    }
  };

  const specialties = [
    { name: 'React Development', icon: <Code size={20} /> },
    { name: 'Cloud Architecture', icon: <Cloud size={20} /> },
    { name: 'Video Editing', icon: <Video size={20} /> },
    { name: 'Graphic/3D Design', icon: <Image size={20} /> },
    { name: 'Photography', icon: <Camera size={20} /> },
    { name: 'Music Composition', icon: <Headphones size={20} /> },
  ];

  return (
    <section id="contact" className="section bg-gradient-to-br from-brand-black to-black">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Intro */}
        <span
          className={cn(
            "inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )}
        >
          Get In Touch
        </span>

        <h2
          className={cn(
            "section-title max-w-xl text-gradient-masculine opacity-0",
            isVisible && "animate-fade-in animate-delay-100"
          )}
        >
          Let's work together on your next project
        </h2>

        <p
          className={cn(
            "section-subtitle mb-12 opacity-0",
            isVisible && "animate-fade-in animate-delay-200"
          )}
        >
          If you're interested in working together, feel free to reach out.
        </p>

        {/* Specialties List */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-3 mb-16 opacity-0",
            isVisible && "animate-fade-in animate-delay-250"
          )}
        >
          {specialties.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "bg-brand-black border border-brand-orange/20 text-white px-4 py-3 rounded-full flex items-center gap-2 transition-all hover:bg-brand-orange/10",
                isVisible && `animate-fade-in animate-delay-${(index + 3) * 50}`
              )}
            >
              <span className="text-brand-orange">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Info Block */}
          <div
            className={cn(
              "md:col-span-2 opacity-0",
              isVisible && "animate-fade-in animate-delay-300"
            )}
          >
            <div className="bg-brand-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-white/10 h-full">
              <h3 className="text-xl font-semibold mb-6 text-gradient-masculine">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Email</h4>
                    <a
                      href="mailto:blackandorange91@gmail.com"
                      className="text-white/70 hover:text-brand-orange transition-colors"
                    >
                      blackandorange91@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Location</h4>
                    <p className="text-white/70">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-base font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    { href: 'https://github.com/danshotit', icon: <Github size={20} />, label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/daniel-ndirangu-892b47216/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                    { href: 'https://www.instagram.com/dandirangu/', icon: <Camera size={20} />, label: 'Instagram' },
                  ].map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="p-3 bg-brand-orange/10 rounded-full hover:bg-brand-orange/20 text-brand-orange transition-colors"
                      aria-label={label}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Why Me */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-base font-semibold mb-4 text-gradient-masculine">
                  Why Work With Me?
                </h4>
                <ul className="space-y-2 text-white/70">
                  {[
                    "Attention to detail and pixel-perfect designs",
                    "Creative problem-solving approach",
                    "Clear communication and timely delivery"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-brand-orange text-sm">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "md:col-span-3 opacity-0",
              isVisible && "animate-fade-in animate-delay-400"
            )}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-brand-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-6 text-gradient-masculine">Send a Message</h3>

              <div className="space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: 'Name', id: 'name', type: 'text', value: formState.name },
                    { label: 'Email', id: 'email', type: 'email', value: formState.email },
                  ].map(({ label, id, type, value }) => (
                    <div key={id} className="space-y-2">
                      <label htmlFor={id} className="block text-sm font-medium">{label}</label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required
                        value={value}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange focus:outline-none transition-all placeholder:text-white/30"
                        placeholder={`Your ${label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange focus:outline-none transition-all resize-none placeholder:text-white/30"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full sm:w-auto bg-brand-orange text-white rounded-full px-8 py-3 font-medium transition-all duration-300 hover:shadow-md hover:bg-brand-orange/90 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
