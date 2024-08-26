
import React from 'react';
import mam from '../assests/1.jpeg';
import m from '../assests/2.jpeg';
import d from '../assests/33.jpeg';
import TrusteeCard from '../components/TrusteeCard';

const trustees = [
  {
    name: 'Prof. Radhakumari',
    title: 'Founder & Chairperson',
    description: 'A dedicated educator with over 40 years of experience.',
    imageUrl: mam  
  },
  {
    name: 'Mrs. Vandana Nagesh',
    title: 'Co-Founder & Vice Chairperson',
    description: 'An enthusiastic supporter of rural education initiatives.',
    imageUrl: m 
  },
  {
    name: 'Dr. SSR Kumar',
    title: 'Board of Director, Nanotechnology Executive, & Entrepreneur',
    description: 'A visionary leader in nanotechnology and entrepreneurship with a proven track record of innovation.',
    imageUrl: d
  }
  

];

const AboutPage = () => {
  return (
    <div>
      <h1>Birth Of The SURE Trust</h1>
      <h2>A narration by the Founder, Prof. Radhakumari</h2>
      
      <p>I have had the greatest privilege of being a student as well as faculty for 40 years in Sri Sathya Sai Institute of Higher Learning, Anantapur Campus, Andhra Pradesh, India, whose founder chancellor is Bhagawan Sri Sathya Sai Baba. While my dream was to continue to serve the Institution even after retirement, little did I realize that Bhagawan had different plans for me. The inborn passion for teaching and research; and the nature of “always move ahead with optimism amidst all adversities”, made my mind debate on how to put to use the vast knowledge acquired over this long period of teaching, for the benefit of youth, especially living in rural areas. So, I decided to set out on a journey to visit the villages, around Puttaparthi, Anantapur district of Andhra Pradesh, India, for assessing the requirements of educated unemployed rural youth. While I was waiting for an auspicious day to begin the journey, I spotted Mrs. Vandana Nagesh, in the Darshan grounds in Sai Kulwant Hall. After she departed from the department of Management & Commerce, Anantapur Campus in the mid-1990s on completion of her studies, this was the first time I met her. Having nurtured special love for all the students, I was pleasantly surprised to see her; and picked up conversation. On listening to my plan during the chat, Mrs. Vandana instantly offered to accompany me.</p>
      <p>Our journey into the villages, thus, began, for identifying the missing skill sets in educated but unemployed rural youth. Delightful coincidences during the journey made us feel that Swami was hand holding and directing us in every step we undertook. The search brought to light the twin realities of rural areas. While most of the rural youth are qualified with professional degrees, majority of them are idling at home lacking the skill sets needed by the industry for employing them. This reality resulted in the dawn of the "Skill Upgradation for Rural-youth Empowerment – SURE" concept. Proceeding further, a brochure mentioning the programs that are offered to enhance their skill sets was circulated. In response, Mr. Jagadeesh, from a remote village in Anantapur district, Andhra Pradesh, India, approached us. A detailed discussion with Jagadeesh revealed that he is highly versatile with Python program, AI, ML,DL, DS, and DA. Having good communication skills and with Navodaya schooling background, he said he discontinued M.C.A integrated program from LPU, Punjab, to use his theoretical knowledge to build industry-related software solutions, and thus gain the required capability to set up a startup venture. completing PG diploma in AI and ML from IIIT, Bangalore. Jagadeesh is currently pursuing MS in AI and ML from Liverpool John Moores University, London, UK, through upGrad online platform. Simultaneously Mr. Jagadeesh is sincerely training batches of students in Python, AI, ML, DL, DS, and DA.</p>
      <p>The overall understanding we gained from this village survey was that majority of rural youth besides possessing good academic degrees, have amazing talent and inexplicable zeal to learn new things. With a little guidance to channelize their latent talent in the right direction, they will undoubtedly become the dynamic soldiers of Indian economic growth. We express our heartfelt gratitude to Bhagawan Sri Sathya Sai Baba for promoting us to start this highly fulfilling service initiate, and sincerely pray for His continued guidance.

</p>

      <h2>Board of Trustees</h2>
      <div className="trustees-container">
        {trustees.map((trustee, index) => (
          <TrusteeCard
            key={index}
            name={trustee.name}
            title={trustee.title}
            description={trustee.description}
            imageUrl={trustee.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

