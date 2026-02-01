import React, { useState } from 'react';
import { Phone, Wrench, Home as HomeIcon, Hammer, Video } from 'lucide-react';

const GreenJobsGalore = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what you need help with';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Create mailto link
      const subject = encodeURIComponent('Green Jobs Galore - Service Request');
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Message:\n${formData.message}`
      );
      
      window.location.href = `mailto:info@greenjobsgalore.com?subject=${subject}&body=${body}`;
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      setErrors(newErrors);
    }
  };

  const galleryImages = [
    'August2024_Bathroomupdate.jpg',
    '2023041011_04.jpg',
    '2024031915_53_04.jpg',
    '20240319_15_53_25.jpg',
    '20240319_15_53_46.jpg',
    '2024050317_11.jpg',
    '2024050GAZEBO.jpg',
    '2023080515_42.jpg',
    '20231206.jpg',
    '2022120913_08.jpg',
    '2022111011_23.jpg',
    '2022101315_44.jpg',
    '2022081220_38.png',
    'backdeack.jpg',
    'stairrailbalusterandpost.jpg',
    'ileachloe.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar with Phone Number */}
      <div className="bg-white py-4 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img 
            src="logo.png" 
            alt="Green Jobs Galore" 
            className="h-24 md:h-32"
          />
          <div className="bg-[#2d7a2e] text-white px-6 py-3 rounded-lg text-right">
            <div className="text-xs mb-1">we are only a phone call away</div>
            <div className="text-2xl md:text-3xl font-bold">289-903-3128</div>
            <div className="text-sm font-semibold mt-1">CALL US NOW</div>
            <div className="text-xs">for an estimate</div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#2a2a2a] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex justify-center space-x-12 py-4">
            <a href="#home" className="hover:text-[#a8d08d] transition-colors">Home</a>
            <a href="#contact" className="hover:text-[#a8d08d] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#c4d79b] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a2a2a] text-center mb-12">
            Reliable Handyman, London Ontario
          </h1>
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-lg text-[#2a2a2a] mb-6">
                  Save money by fixing instead of replacing. Give us a call or shoot us a text to get a no obligation quote.
                </p>
              </div>
              
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-2">
                  Residential
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-4">
                  and
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a]">
                  Commercial
                </h2>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-[#2a2a2a]">
                  We specialize in recording our work. We'll give you a pile of photos and videos from before and after the job.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#2d7a2e] p-8 rounded-lg shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded ${errors.firstName ? 'border-2 border-red-500' : ''}`}
                    />
                    {errors.firstName && <p className="text-red-200 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded ${errors.lastName ? 'border-2 border-red-500' : ''}`}
                    />
                    {errors.lastName && <p className="text-red-200 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded ${errors.email ? 'border-2 border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-200 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded ${errors.phone ? 'border-2 border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-200 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="text-white text-sm mb-2 block">
                    What do you need help with?
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded resize-none ${errors.message ? 'border-2 border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <p className="text-red-200 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#f5a623] hover:bg-[#e09612] text-white font-bold py-3 px-6 rounded transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="bg-[#c4d79b] py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* INSIDE Card */}
            <div className="text-center">
              <div className="bg-black text-white py-4 px-6 rounded-lg mb-3 inline-flex items-center justify-center space-x-2">
                <Wrench className="w-6 h-6" />
                <span className="font-bold text-lg">INSIDE</span>
              </div>
              <p className="text-[#2a2a2a] text-sm">
                Framing, kitchens, bathrooms, etc.
              </p>
            </div>

            {/* OUTSIDE Card */}
            <div className="text-center">
              <div className="bg-black text-white py-4 px-6 rounded-lg mb-3 inline-flex items-center justify-center space-x-2">
                <HomeIcon className="w-6 h-6" />
                <span className="font-bold text-lg">OUTSIDE</span>
              </div>
              <p className="text-[#2a2a2a] text-sm">
                Decks, fences, sheds, siding, etc.
              </p>
            </div>

            {/* HANDYMAN Card */}
            <div className="text-center">
              <div className="bg-black text-white py-4 px-6 rounded-lg mb-3 inline-flex items-center justify-center space-x-2">
                <Hammer className="w-6 h-6" />
                <span className="font-bold text-lg">HANDYMAN</span>
              </div>
              <p className="text-[#2a2a2a] text-sm">
                Fix it to save money and time.
              </p>
            </div>

            {/* RECORD Card */}
            <div className="text-center">
              <div className="bg-black text-white py-4 px-6 rounded-lg mb-3 inline-flex items-center justify-center space-x-2">
                <Video className="w-6 h-6" />
                <span className="font-bold text-lg">RECORD</span>
              </div>
              <p className="text-[#2a2a2a] text-sm">
                Get video/photos of before/after
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={image} 
                  alt={`Project ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#c4d79b] py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
              src="carpentersbagwithbeltfulloftoolslaidonwoodentableconstructionsiteSBI305222493.jpg" 
              alt="Tools" 
              className="w-full rounded-lg shadow-lg"
            />
            <div className="text-center md:text-left">
              <a 
                href="https://g.page/r/CQksu5s2oN8BEBM/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#a8d08d] hover:bg-[#8fb876] text-[#2a2a2a] font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                GOOGLE REVIEW →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2a2a2a] text-white py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2022-2025, Green Jobs Galore, A Bizbio Inc. Company.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GreenJobsGalore;
