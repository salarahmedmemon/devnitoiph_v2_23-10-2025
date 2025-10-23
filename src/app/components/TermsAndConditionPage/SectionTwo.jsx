const SectionTwo = () => {
  return (
    <div className="w-full min-h-screen bg-[#EEE] relative overflow-hidden">
      {/* Top-right circle */}
      <div className="hidden md:block w-[40vw] max-w-[300px] aspect-square bg-[#BCD4EF] rounded-full absolute -top-[5vw] -right-[10vw] p-[.1vw] z-[1]">
        <div className="w-full h-full bg-gradient-to-b to-[#DFE6EE] from-[#EBECEE] rounded-full"></div>
      </div>

      {/* Bottom-left circle */}
      <div className="hidden md:block w-[100vw] max-w-[800px] aspect-square bg-white rounded-full absolute -bottom-[15vw] -left-[10vw] p-[3px] z-[1]">
        <div className="w-full h-full bg-[#EEEE] rounded-full"></div>
      </div>

      {/* Section 1 */}
      <div className="relative z-[1000] p-4 mt-8 sm:mt-12 ms-4 sm:ms-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          1. Your User Account and Content
        </h1>
        <p className="text-[#555] text-sm sm:text-base md:text-lg pt-4 max-w-5xl leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur
        </p>
      </div>

      {/* Section 2 */}
      <div className="relative z-[1000] p-4 mt-8 sm:mt-12 ms-4 sm:ms-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          2. Your Use of Our Service:
        </h1>
        <div className="space-y-4 text-[#555] pt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl">
          <p>
            1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative z-[1000] p-4 mt-8 sm:mt-12 ms-4 sm:ms-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          3. Reporting Copyright and Other IP Violations
        </h1>
        <div className="space-y-4 text-[#555] text-sm pt-4 sm:text-base md:text-lg leading-relaxed max-w-5xl">
          <p>
            1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
