import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Check, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import exteriorImage from "@assets/Exterior-Front-Homepage-Alt-1_1751842464150.jpeg";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailConfig, setEmailConfig] = useState(null);
  const { toast } = useToast();

  // Fetch email configuration from backend
  useEffect(() => {
    fetch('/api/config')
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Email config loaded:', data.emailjs);
        setEmailConfig(data.emailjs);
      })
      .catch(error => {
        console.error('Failed to load email config:', error);
        // Fallback to hardcoded values if API fails
        console.log('Using fallback email configuration');
        setEmailConfig({
          serviceId: 'service_zqnfqk6',
          templateId: 'template_28nj7rp',
          publicKey: 'vOTyhdXNTECRzjWWT'
        });
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if email configuration is loaded
    if (!emailConfig) {
      console.error('Email configuration not loaded!');
      toast({
        title: "Configuration Error",
        description: "Email configuration is not available. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    console.log('Using email config:', emailConfig);

    // Try different field mapping patterns that EmailJS commonly uses
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Casa Benavides",
      to_email: "casabena@taosnet.com"
    };
    
    console.log('Sending email with params:', templateParams);

    emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    )
    .then((result) => {
      console.log("Email successfully sent!", result);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error("Email send error:", error);
      console.error("Error details:", error.text, error.status);
      
      // Try alternative parameter names if first attempt fails
      if (error.status === 404) {
        console.log("Trying alternative parameter names...");
        const altParams = {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        };
        
        return emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          altParams,
          emailConfig.publicKey
        );
      }
      throw error;
    })
    .then((result) => {
      if (result) {
        console.log("Email sent with alternative params!", result);
        toast({
          title: "Message Sent!",
          description: "Thank you for your message! We will get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    })
    .catch((finalError) => {
      console.error("Final email send error:", finalError);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locationHighlights = [
    "1 Block from Taos Plaza",
    "1/2 Block from Kit Carson Home",
    "Walking Distance to Shopping, Galleries, Dining",
    "10-minute drive to Rio Grande Gorge Bridge",
    "10-minute drive to The Taos Pueblo"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">CONTACT US</h2>
          <p className="luxury-body text-sm text-gray-900 max-w-4xl mx-auto leading-relaxed">Get in touch to plan your perfect Taos getaway</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <img 
                src={exteriorImage} 
                alt="Casa Benavides Inn exterior" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-casa-blue mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="luxury-subheading font-semibold text-casa-navy">Address</h3>
                  <p className="luxury-body text-gray-900">
                    Casa Benavides Inn<br />
                    137 Kit Carson Road<br />
                    Taos, New Mexico 87571
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-casa-blue mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="luxury-subheading font-semibold text-casa-navy">Phone</h3>
                  <a href="tel:5757581772" className="text-casa-blue hover:text-casa-blue-light">
                    575-758-1772
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-casa-blue mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="luxury-subheading font-semibold text-casa-navy">Email</h3>
                  <a href="mailto:info@casabenavides.com" className="text-casa-blue hover:text-casa-blue-light">
                    info@casabenavides.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Highlights */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Best of Taos Location</h3>
                <div className="space-y-2 text-gray-600">
                  {locationHighlights.map((highlight, index) => (
                    <p key={index}>
                      <Check className="w-4 h-4 text-casa-blue mr-2 inline" />
                      {highlight}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-casa-blue hover:bg-casa-blue-light"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Reservation Information */}
            <Card className="mt-8 border-2 border-casa-blue">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Make Your Reservation</h3>
                <p className="text-gray-600 mb-4">
                  Individual room reservations of up to 4 rooms can be made using our automated reservations system. 
                  Please call for Group Reservations over 4 rooms.
                </p>
                <Button asChild className="bg-casa-blue hover:bg-casa-blue-light">
                  <a 
                    href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Click to Make Your Reservation!
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Integration */}
        <div className="mt-16">
          <h3 className="luxury-subheading text-2xl font-semibold mb-6 text-center text-casa-navy">Find Us</h3>
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.7423853!2d-105.5726!3d36.4070267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87176522a5e3309d%3A0x77572bd3bb2f6f2a!2s137%20Kit%20Carson%20Rd%2C%20Taos%2C%20NM%2087571!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Casa Benavides Inn Location"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <Button asChild variant="outline" className="border-casa-blue text-casa-blue hover:bg-casa-blue hover:text-white">
              <a 
                href="https://www.google.com/maps/place/137+Kit+Carson+Rd,+Taos,+NM+87571/@36.4070267,-105.57262,18z/data=!4m2!3m1!1s0x87176522a5e3309d:0x77572bd3bb2f6f2a" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View & Print Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
