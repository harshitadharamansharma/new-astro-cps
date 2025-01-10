const Card = ({ title, image, onClick }) => (
  <div onClick={onClick} 
  className=" group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md cursor-pointer" >
      <a className="block">
            <div className="h-28">
                <div className="relative object-cover object-center  mx-auto z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-[var(--accent-2)] rounded-xl justify-items-center align-middle">
                    <img 
                      src={image}
                      className="w-36 h-36 mt-6 m-auto" 
                      alt={title} 
                      title= {title}
                      loading="lazy"
                      width="200" height="200" />
              </div>
                <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    
                </div>
          </div>
          <div className="p-4 z-10 w-full">
              <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                  {title}
              </p>
          </div>
      </a>
  </div>
  ); 

export default Card;

