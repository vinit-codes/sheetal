const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex flex-col gap-8 md:gap-12 px-4 md:px-20 lg:px-40">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] bg-black">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Sheetal</h1>
          <p className="text-lg md:text-xl">Crafting Fashion Excellence Since 2024</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between py-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            At Sheetal, we believe in making high-quality fashion accessible to everyone. 
            Our mission is to provide a seamless shopping experience with carefully curated 
            collections that blend style, comfort, and affordability.
          </p>
        </div>
        <div className="flex-1 h-96 bg-gray-100 rounded-lg"></div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">Quality First</h3>
          <p className="text-gray-600">
            We maintain the highest standards in our product selection, ensuring 
            every piece meets our quality benchmarks.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
          <p className="text-gray-600">
            Your satisfaction is our priority. We're committed to providing 
            exceptional service at every step.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3">Sustainability</h3>
          <p className="text-gray-600">
            We're committed to sustainable practices and responsible fashion 
            choices for a better future.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Piyush piroziwala</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Creative Director</p>
          </div>
          <div className="text-center">
            <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold">Mike Johnson</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
