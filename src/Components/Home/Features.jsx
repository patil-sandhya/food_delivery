'use client'

export default function Features() {
  const features = [
    {
      icon: "https://static.vecteezy.com/system/resources/previews/044/810/139/non_2x/coffee-menu-board-3d-illustration-png.png",
      title: "Fast Delivery",
      description: "Pick your favorite dishes from our menu.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4088/4088793.png",
      title: "Safe & Secure",
      description: "Place your order with your location details",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/thumbnails/056/608/568/small/vibrant-vegetables-toss-in-red-wok-pan-delicious-healthy-cooking-food-preparation-free-png.png",
      title: "Quality Food",
      description: "We prepare everything fresh, just for you.",

    },
    {
      icon: "https://png.pngtree.com/png-vector/20221219/ourmid/pngtree-delivery-boy-with-food-png-image_6528630.png",
      title: "Easy Pickup",
      description: "Get your food delivered in 30 minutes or less",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Why Choose <span className="text-primary">Forky</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fast, fresh, and reliable—every time. We bring your favorite food to your doorstep with care, speed, and unbeatable taste. You crave it, we deliver it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl  shadow-[#f47c7c] shadow-sm transition duration-300 ease-in-out hover:shadow-[#f47c7c]  hover:shadow-2xl hover:scale-105 ">
              <div className="bg-coral-100 w-40 h-w-40 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <img src={feature.icon} alt=""  />
              </div>
              {/* <h3 className="text-xl font-semibold text-navy-900 mb-2">{feature.title}</h3> */}
              <p className="text-textClr font-semibold">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
