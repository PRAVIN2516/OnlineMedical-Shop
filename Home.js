import React from "react";
import NavBar from "./Navbar";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <NavBar/>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Welcome to OnlineMedicalShop
        </h1>
        <img
          src="https://www.emaadinfotech.com/blog/wp-content/uploads/2020/08/gifgit.png"
          alt="OnlineMedicalShop"
          className="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-6"
        />
        <div className="text-lg text-gray-700">
          <p className="mb-4">
            Online medical shops, also known as e-pharmacies or digital
            pharmacies, provide a convenient and accessible way for people to
            purchase medicines and healthcare products online.
          </p>
          <p className="mb-4">
            Key Features of Online Medical Shops:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Wide Range of Products: Online medical shops offer a diverse
              range of products, including prescription medications,
              over-the-counter drugs, vitamins, supplements, medical devices,
              personal care products, and health-related accessories.
            </li>
            <li>
              User-Friendly Website: These platforms provide a seamless and
              hassle-free shopping experience with easy navigation, search
              functionality, and a secure checkout process.
            </li>
            <li>
              24/7 Accessibility: Customers can place orders and access
              healthcare information at any time, making it convenient for those
              with busy schedules or health concerns outside regular business
              hours.
            </li>
            <li>
              Prescription Services: Many online medical shops have licensed
              pharmacists who can review and fulfill prescription orders.
            </li>
            <li>
              Privacy and Security: Online medical shops prioritize patient
              privacy and data security.
            </li>
          </ul>
          <p>
            Whether you need over-the-counter medications, prescription drugs,
            or healthcare supplies, OnlineMedicalShop is here to assist you in
            managing your healthcare needs efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
