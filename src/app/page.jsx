import Image from "next/image";
import img from '../../public/img1 (2).svg'
import img1 from '../../public/img1.svg'
import img2 from '../../public/img1 (1).svg'
import img3 from '../../public/img1 (3).svg'
import img4 from '../../public/img1 (4).svg'
import img5 from '../../public/img1 (5).svg'
import img6 from '../../public/img1 (6).svg'
import img7 from '../../public/img1 (7).svg'
import img8 from '../../public/img1 (8).svg'
import img9 from '../../public/img2 (1).png'
import img10 from '../../public/img2 (2).png'
import img11 from '../../public/img2 (3).png'
import img12 from '../../public/img1 (9).svg'
import img13 from '../../public/img2 (4).png'
import img14 from '../../public/img2 (5).png'
import img15 from '../../public/img2 (6).png'
import img16 from '../../public/img2 (7).png'
import Footer from "@/component/Footer";
import Todo from "@/component/Todo";

export default function Home() {
  return (
    <div >
      <div className="lg:flex justify-around lg:mx-0 mx-[10px] items-center my-[50px]">
        <div className="lg:w-[40%] ">
          <p className="font-bold text-4xl lg:text-6xl my-[20px]">Teach students worldwide</p>
          <p>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
          <div className=" flex gap-[40px] my-[30px]">
            <button className="p-[10px] bg-orange-600 text-white font-bold  rounded">Sign Up Now</button>
            <button className="text-blue-600 font-bold">View Demo</button>
          </div>
          <Image src={img} alt="Test" />
        </div>
        <div className="lg:w-[50%]">
          <Image src={img1} alt="Test" className="w-[90%]" />
        </div>
      </div>
      <div className="text-center lg:w-[80%] lg:bg-[#f1f5f900] bg-[#F1F5F9] lg:ml-[10%] py-[50px] absolute z-20">
        <p className="text-4xl font-bold my-[20px]">All the tools that you need</p>
        <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. <br />
          Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        <div className=" flex justify-center">
          <Image src={img3} alt="test" className="mt-[30px]" />
        </div>
        <Image src={img5} alt="test" className="mt-[30px]" />
      </div>
      <div className="lg:flex justify-between bg-[#F1F5F9] py-[100px]  hidden">
        <Image src={img2} alt="test" className=" " />
        <Image src={img4} alt="test" className=" " />
      </div>
      <div className="lg:flex justify-around  my-[50px] ">
        <div className="lg:w-[35%]  lg:mt-[100px] lg:mx-0 mx-[10px]  mt-[700px]">
          <p className="font-bold text-3xl lg:text-5xl mb-[20px] ">An all-in-one app that makes it easier</p>
          <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
          <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
          <li>Ullamcorper ornare in et egestas dolor orci.</li>
          <button className=" text-blue-600 font-bold  lg:text-3xl mt-[20px]">Find more about the app →</button>
        </div>
        <div className="lg:w-[50%]">
          <Image src={img6} alt="T" />
          <div className="flex gap-[20px] lg:gap-[40px] justify-center  mb-[50px] mt-[-100px]">
            <div className="shadow lg:w-[40%] bg-white  rounded p-[20px] ">
              <button className="bg-[#F3E8FF] text-[#6B21A8] p-[3px]">Featured</button>
              <p className="font-bold lg:text-2xl">The map of mathematics</p>
              <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              <button className="border border-blue-500 text-blue-700 p-[10px] w-[90%]  mt-[20px] rounded font-bold">Take Lesson</button>
            </div>
            <div className="shadow lg:w-[40%] bg-white  rounded p-[20px] ">
              <button className="bg-[#DBEAFE] text-blue-600 p-[3px]">Featured</button>
              <p className="font-bold lg:text-2xl">Design for how people think</p>
              <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              <button className="border border-blue-500 text-blue-700 p-[10px] w-[90%]  mt-[20px] rounded font-bold">Take Lesson</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-around lg:m-0 m-[20px] items-center">
        <div>
          <Image src={img7} alt="test" />
        </div>
        <div className="lg:w-[45%]">
          <Image src={img8} alt="test" className="ml-[300px] lg:block hidden" />
          <p className="font-bold text-3xl lg:text-5xl mb-[30px]">Meet international students & teachers</p>
          <p>Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</p>
          <button className="font-bold lg:text-2xl text-blue-600 mt-[30px]">Explore teachers and students →</button>
        </div>
      </div>
      <div className="lg:flex justify-center gap-[30px] bg-[#0F172A] py-[40px] my-[30px]">
        <Image src={img10} alt="test" />
        <Image src={img11} alt="test" />
        <Image src={img9} alt="test" />
      </div>

      <Todo/>


      <div className="lg:flex justify-around lg:m-0 m-[20px] items-center">
        <div className="lg:w-[35%]">
          <p className="font-bold text-2xl lg:text-5xl mb-[20px]">All the cool features</p>
          <p>Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</p>
          <button className="font-bold lg:text-2xl text-blue-600 mt-[20px]">View all the features →</button>
        </div>
        <div className="lg:w-[55%]">
          <Image src={img12} alt="test" />
        </div>
      </div>
      <div className="lg:flex justify-between items-center  bg-[#FACC15] py-[50px]">
        <div className="lg:w-[25%]">
          <Image src={img14} alt="test" className="hidden lg:block" />
          <Image src={img16} alt="test" className="lg:hidden" />
        </div>
        <div className="lg:w-[35%] text-center">
          <p className="font-bold text-3xl lg:text-4xl mb-[20px] ">Join a world of learning</p>
          <p>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            Risus elit et fringilla habitant ut facilisi.</p>
          <button className="p-[10px] w-[60%] font-bold bg-red-700 text-white rounded mt-[20px]">Sign Up Now</button>
        </div>
        <div className="lg:w-[25%]">
          <Image src={img13} alt="test" className="hidden lg:block" />
          <Image src={img15} alt="test" className="lg:hidden" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
