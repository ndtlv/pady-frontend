'use client'

export default function AboutPage() {
  return (
    <div className="h-full px-16 w-full flex flex-col gap-6">
      <div className="h-full w-full p-6 bg-white rounded-xl">
        <div className="flex flex-col gap-3">
          <div className="text-black flex flex-col gap-3 text-md">
            <span>
              This website was created as an open source tool, based off X and Y with references to Z and A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, purus a rutrum rhoncus, metus dolor eleifend justo, ac ornare nisi felis cursus felis. Mauris at mauris dolor. In dolor nibh, ullamcorper nec pretium non, vulputate a nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a maximus nisi. Nullam suscipit sed ipsum bibendum varius. Integer ligula enim, fermentum eget faucibus nec, egestas nec metus. Phasellus ullamcorper luctus massa, eget placerat augue laoreet nec. Maecenas convallis mauris gravida, lobortis mi id, pulvinar tellus
            </span>
            <span>
              Donec lobortis dignissim velit ut gravida. Cras accumsan efficitur libero, vel tempor sem congue tempor. Aenean in nisi congue, elementum felis vitae, efficitur magna. Suspendisse faucibus orci ut velit fringilla, in feugiat lacus semper. Nulla accumsan aliquam turpis, at accumsan velit. Pellentesque varius est eu felis hendrerit, sed faucibus ligula sagittis. Quisque condimentum ex et quam egestas lacinia.
              Maecenas eu laoreet justo, eget fermentum risus. Donec quis efficitur ex, eu mollis est. Fusce non est ac neque consequat porttitor eget a tellus. Donec pulvinar molestie commodo. Suspendisse mollis in risus nec bibendum. Nam faucibus ante eu felis tempus, ac feugiat justo ultricies. In non tincidunt nisl. Phasellus id nunc lobortis, pellentesque metus id, tristique felis. Praesent lectus elit, ullamcorper sit amet molestie ut, ullamcorper eget justo. Sed vestibulum euismod augue quis dignissim. Pellentesque quis interdum metus. Vivamus eros arcu, gravida quis purus dignissim, faucibus volutpat tortor.
            </span>
            <span>
              Integer ullamcorper nisi ligula, a dignissim tellus euismod aliquet. Donec eu ligula ullamcorper, condimentum orci eu, vehicula lacus. Etiam at nunc id dui scelerisque accumsan ac eget arcu. Integer fringilla risus ut tincidunt consequat. Vestibulum sed nulla vitae elit consectetur eleifend. Suspendisse potenti. Pellentesque in lacus eros. Proin nec lorem sit amet arcu tristique accumsan ac ac purus. Suspendisse convallis et magna non egestas. Duis lobortis diam a metus semper dignissim. Fusce ac pharetra dolor. Aliquam non erat eu lectus ornare feugiat vitae vel tellus. Nullam ultrices neque enim, in feugiat risus congue vel. Sed vulputate, ante sodales tempus commodo, augue ante aliquet orci, at placerat magna diam vel nibh. Integer accumsan elit ut lorem faucibus, quis blandit tellus sodales.
            </span>
            <span>
              Phasellus in purus ipsum. Donec dignissim enim id est tincidunt scelerisque in eget leo. Mauris condimentum dignissim quam, ut ultricies augue porta ac. Etiam efficitur varius porta. Sed eu ante in arcu sodales aliquet. Nunc ultricies lorem augue, at fringilla elit pellentesque in. Nam est risus, egestas id dignissim quis, feugiat vitae mi. Morbi in augue enim. Vivamus et lacinia enim, in feugiat nisi. Integer hendrerit ac sem a rhoncus. Sed ultricies dictum fringilla. Maecenas pellentesque ante porta libero semper feugiat id a massa. Etiam venenatis nunc non fermentum lacinia.
            </span>
          </div>
          <div className="w-full flex justify-end">
            <a href="/" className="flex justify-end h-10 w-10">
              <div className="bg-[url('../public/github-mark.png')] bg-cover w-full h-full"></div>
            </a>
          </div>
        </div>   
      </div>
    </div>
)}
