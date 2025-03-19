
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import SectionHeader from '@/components/ui/SectionHeader';
import IntersectionObserver from '@/components/ui/IntersectionObserver';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Contact Us"
            subtitle="Get in touch with our expert team for inquiries, quotes, or support."
            centered
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IntersectionObserver className="delay-100">
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                  <p className="text-muted-foreground">(555) 987-6543</p>
                </div>
              </div>
            </IntersectionObserver>
            
            <IntersectionObserver className="delay-200">
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <p className="text-muted-foreground">info@securefence.com</p>
                  <p className="text-muted-foreground">sales@securefence.com</p>
                </div>
              </div>
            </IntersectionObserver>
            
            <IntersectionObserver className="delay-300">
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </IntersectionObserver>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <IntersectionObserver>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-4">Visit Our Showroom</h3>
                <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203483178!2d-118.24146698478858!3d34.05209852525092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648957ebb05%3A0x73ff07506ddb2f5f!2s1000%20S%20Grand%20Ave%2C%20Los%20Angeles%2C%20CA%2090015!5e0!3m2!1sen!2sus!4v1620942123456!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Company Location"
                  ></iframe>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    123 Industrial Blvd, Unit 4<br />
                    Manufactureville, CA 90210<br />
                    United States
                  </p>
                </div>
              </div>
            </IntersectionObserver>

            {/* Contact Form */}
            <IntersectionObserver className="delay-200">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        I'm Interested In
                      </label>
                      <Select
                        value={formData.interest}
                        onValueChange={handleInterestChange}
                      >
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="security-spikes">Security Spikes</SelectItem>
                          <SelectItem value="electrowelded-gates">Electrowelded Gates</SelectItem>
                          <SelectItem value="shark-net-gates">Shark Net Gates</SelectItem>
                          <SelectItem value="custom-solutions">Custom Solutions</SelectItem>
                          <SelectItem value="quote">General Quote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </IntersectionObserver>
          </div>
        </div>
      </section>
    </div>
  );
}
