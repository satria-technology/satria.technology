import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-slate-100 to-red-100">
        <div className="mx-auto max-w-screen-lg container">
          <div className="lg:flex lg:justify-between lg:items-center py-6">
            <div className="flex justify-between items-center">
              <div>
                <a
                  href="<?php echo get_bloginfo( 'url' ); ?>"
                  className="font-extrabold text-lg uppercase"
                >
                  Satria.Technology
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="bg-gradient-to-r from-slate-100 to-red-100 mb-40 sm:mb-32 sm:mb-0">
          <div className="max-w-screen-lg container mx-auto relative flex flex-col-reverse sm:items-center sm:grid sm:grid-cols-2 sm:gap-4">
            <div
              className="absolute sm:relative bg-white sm:bg-transparent h-fit max-w-[90%] sm:max-w-[100%]
						border-4 sm:border-none border-b-slate-500 border-r-slate-500 border-t-slate-50 border-l-slate-50
						-bottom-28 sm:bottom-0 p-3 sm:p-0 space-y-3"
            >
              <p className="text-lg md:text-4xl font-semibold sm:font-bold">
                Profit Amplified, Experience Elevated: Consulting-First Software
                Solutions.
              </p>
              <p className="pl-2 text-xs md:text-sm font-light text-slate-500 ">
                Konsultan Teknologi IT, membantu memperbesar profit Anda dan
                juga meningkatkan pengalaman pada bisnis Anda.
              </p>
              <a
                href="<?php the_field('cta_janjian_link'); ?>"
                className="block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-black font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:from-slate-100 hover:to-red-100"
              >
                Janjian Konsultasi
              </a>
            </div>
            <StaticImage
              src="../images/asian-man-saying-good-job.webp"
              placeholder="blurred"
              alt="Stock Photo"
            />
          </div>
        </div>
        <main>
          <div className="container max-w-screen-xl mx-auto my-8 px-3">
            <div className="my-16">
              <h2 className="text-center text-4xl font-bold mb-8">
                Kolaborasi untuk pencapaian terbaik bisnis Anda
              </h2>
              <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4">
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  AI
                </span>
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Web App
                </span>
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Android
                </span>
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  iOS
                </span>
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  NFT
                </span>
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Machine Learning
                </span>
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Cryptocurrency
                </span>
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  gen-AI
                </span>
                <span className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Payment Processing UI/UX
                </span>
              </div>
              <div className="text-center">
                <StaticImage
                  src="../images/half-globe-down.png"
                  placeholder="blurred"
                  alt="Stock Photo"
                  className="mx-auto"
                />
              </div>
            </div>

            <div className="my-16">
              <h2 className="text-center text-4xl font-bold mb-4">
                Consultation-First Software Solution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border-l border-t border-r-4 border-b-4 border-slate-500 p-4">
                  <StaticImage
                    src="../images/i-have-idea.jpg"
                    placeholder="blurred"
                    alt="Stock Photo"
                  />
                  <h3 className="text-2xl font-bold mt-4 mb-2">
                    Tech Consulting
                  </h3>
                  <p>
                    Kami memberikan saran ahli untuk membantu Anda mengarungi
                    dunia teknologi yang kompleks. Konsultan kami akan
                    membimbing Anda dalam membuat keputusan yang terinformasi
                    tentang solusi teknologi terbaik untuk memenuhi kebutuhan
                    bisnis Anda, memastikan Anda tetap unggul di era digital.
                  </p>
                </div>
                <div className="bg-white border-l border-t border-r-4 border-b-4 border-slate-500 p-4">
                  <StaticImage
                    src="../images/discussing-mobile-app.jpg"
                    placeholder="blurred"
                    alt="Stock Photo"
                  />
                  <h3 className="text-2xl font-bold mt-4 mb-2">
                    Product Ideation
                  </h3>
                  <p>
                    Kami mengubah ide-ide Anda menjadi kenyataan. Tim manajer
                    produk dan desainer berpengalaman kami bekerja secara
                    kolaboratif untuk membangun produk perangkat lunak inovatif
                    dan berkualitas tinggi yang disesuaikan dengan kebutuhan
                    bisnis Anda.
                  </p>
                </div>
                <div className="bg-white border-l border-t border-r-4 border-b-4 border-slate-500 p-4">
                  <StaticImage
                    src="../images/business-executives-reading-sticky-notes.jpg"
                    placeholder="blurred"
                    alt="Stock Photo"
                  />
                  <h3 className="text-2xl font-bold mt-4 mb-2">
                    Software Development
                  </h3>
                  <p>
                    Kami ahli dalam menciptakan solusi perangkat lunak yang
                    tangguh, dapat diukur, dan efisien. Tim pengembang terampil
                    kami menggunakan teknologi terbaru dan praktik terbaik untuk
                    menghasilkan aplikasi perangkat lunak kustom yang
                    meningkatkan operasi bisnis dan mendorong pertumbuhan.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-16 text-center grid sm:grid-cols-2 border-l border-t border-r-4 border-b-4 border-slate-500">
    <div className="text-left p-8 bg-red-50">
      <p className="text-4xl font-bold mb-4">Belum yakin dengan kebutuhan Anda?</p>
      <a href="<?php the_field('cta_janjian_link'); ?>" className="block w-fit bg-white border border-b-2 border-r-2 border-black drop-shadow text-black font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:from-slate-100 hover:to-red-100">
        Janjian Konsultasi Gratis
      </a>
    </div>
    <div className="text-left p-8 bg-red-600 text-white">
      <p className="font-bold text-lg">PT Satria Teknologi Studio</p>
      <div className="mt-2 text-md">
        Kaliduren 2
        Moyudan, Kab Sleman
        Prov Daerah Istimewa Yogyakarta 55563
      </div>
      <p className="mt-2 text-md">t: +62 851 6262 xxxx</p>
      <p className="mt-2 text-md">e: info@satria.technology</p>
      <a href="#" className="mt-4 block w-fit bg-white border border-r-2 border-b-2 border-black drop-shadow text-black font-semibold text-sm md:text-base p-2 md:px-4 md:py-2 hover:from-slate-100 hover:to-red-100">
        Lihat Profil Perusahaan
      </a>
    </div>
  </div>

 {/* <div className="my-16">
   <h2 className="text-center text-4xl font-bold">Temukan Inspirasi Baru dari Blog Kami</h2>

   <div className="post-listing mt-4">
     <?php
     // The Query
     $args = array(
       'post_type' => 'post',
       'posts_per_page' => 10,
     );
     $the_query = new WP_Query( $args );

     // The Loop
     if ( $the_query->have_posts() ) :
       while ( $the_query->have_posts() ) : $the_query->the_post();
         get_template_part( 'template-parts/content', get_post_format() );
       endwhile;
     else :
       echo '<p>No posts found</p>';
     endif;

     // Restore original Post Data
     wp_reset_postdata();
     ?>
   </div>
 </div> */}

            <div className="text-xs text-center container mx-auto max-w-screen-lg text-slate-400">
              <span>
                <a href="https://www.freepik.com/free-photo/asian-man-saying-good-job_6802044.htm">
                  Hero image by pressfoto
                </a>
              </span>
              ,
              <span>
                <a href="https://www.freepik.com/free-photo/i-have-idea_5766155.htm">
                  Tech Consultation image by pressfoto
                </a>
              </span>
              ,
              <span>
                <a href="https://www.freepik.com/free-photo/discussing-mobile-app_5698277.htm">
                  Product Development image by pressfoto
                </a>
              </span>
              ,
              <span>
                <a href="https://www.freepik.com/free-photo/business-executives-reading-sticky-notes_1005802.htm">
                  Software Development image by peoplecreations
                </a>
              </span>
              , on Freepik
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-slate-800 text-white py-12">
        <div className="container max-w-screen-lg mx-auto pb-4 mb-4 border-b border-white flex flex-col gap-6 sm:gap-0 sm:grid sm:grid-cols-3">
          <div>
            <p className="text-md font-semibold sm:font-bold">
              Satria Technology
            </p>
            <p className="text-md mt-4">
              Profit Amplified, Experience Elevated: Consulting-First Software
              Solutions.
            </p>
            <div className="flex flex-row gap-4 mt-4">
              <a
                href="https://www.facebook.com/satria.technology"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/satria.technology"
                className="text-blue-400 hover:text-blue-600 text-2xl"
              >
                <svg
                  className="h-6 w-6"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com/satria.technology"
                className="text-pink-600 hover:text-pink-800 text-2xl"
              >
                <svg
                  className="h-6 w-6"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/satria.technology"
                className="text-blue-700 hover:text-blue-900 text-2xl"
              >
                <svg
                  className="h-6 w-6"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
          </div>
          <div>{/* pass */}</div>
          <div>
            <p className="font-bold text-lg mb-2">PT Satria Teknologi Studio</p>
            <div className="mt-2 text-sm">
              Kaliduren 2 Moyudan, Kab Sleman Prov Daerah Istimewa Yogyakarta
              55563
            </div>
            <p className="mt-2 text-sm">t: +62 851 6262 xxxx</p>
            <p className="mt-2 text-sm">e: info@satria.technology</p>
          </div>
        </div>

        <div className="container mx-auto text-center">
          &copy; 2024 - Satria Technology
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
