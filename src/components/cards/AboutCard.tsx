import * as React from "react";

const AboutCard = () => (
  <div className="flex flex-1 grow">
    <div className="p-6 bg-[#3A9086] rounded-lg">
      <h6 className="text-[#F3F4F6]">About</h6>

      <p className="mt-4 text-[#F3F4F6] break-words">
        Octalogic Tech is a SaaS company based in Goa, India, that provides custom software
        development, mobile app development, and IT consulting services to clients worldwide. Our
        turnkey solutions are designed to simplify the process of software development and
        deployment, providing clients with a seamless end-to-end experience.
      </p>
      <br />

      <p className="text-[#F3F4F6] break-words">
        Being sector agnostic, we have provided tailor-made solutions to clients in FinTech,
        MedTech, EdTech, FoodTech, and e-commerce verticals.With a proven track record of delivering
        quality and innovative solutions to clients in various industries, our team of experienced
        professionals leverages cutting-edge technology and industry best practices that meet
        client&apos;s specific needs and goals.
      </p>
    </div>
  </div>
);

export default AboutCard;
