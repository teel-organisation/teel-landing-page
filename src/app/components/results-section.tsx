"use client"

import { ArrowLeft, ArrowRight, ArrowDownRight } from "lucide-react"
import { useRef, useState } from "react"

export default function ResultsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const desktopCarouselRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      quote:
        "We saw table turnover increase by 15% in just the first month. Teel is simple, intuitive, and integrates directly with our POS.",
      name: "Sarah Keane",
      title: "Owner, Osteria Milano, Cork",
      image: "/profileOne.jpg",
    },
    {
      id: 2,
      quote:
        "Unlike other solutions we've tried, Teel just works. Our payouts arrive as normal, and guests genuinely prefer the experience.",
      name: "Liam O'Connor",
      title: "Restaurant Group Operator, Galway",
      image: "/profileTwo.jpg",
    },
    {
      id: 3,
      quote:
        "Teel has transformed our operations. Guests love the seamless payments and we save hours every week.",
      name: "John B",
      title: "General Manager",
      image: "/profileThree.jpg",
    },
  ]

  const scrollToTestimonial = (index: number) => {
    if (desktopCarouselRef.current) {
      const cardWidth =
        desktopCarouselRef.current.firstChild instanceof HTMLElement
          ? desktopCarouselRef.current.firstChild.offsetWidth + 32 // +gap
          : 0
      desktopCarouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
    }
  }

  const nextTestimonial = () => {
    let newIndex = currentTestimonial + 1
    if (newIndex >= testimonials.length) {
      newIndex = 0 // loop back
    }
    setCurrentTestimonial(newIndex)
    scrollToTestimonial(newIndex)
  }

  const prevTestimonial = () => {
    let newIndex = currentTestimonial - 1
    if (newIndex < 0) {
      newIndex = testimonials.length - 1 // loop to last
    }
    setCurrentTestimonial(newIndex)
    scrollToTestimonial(newIndex)
  }

  return (
    <section className="py-16 bg-white px-4 lg:px-20">
      <div className="mx-auto px-4">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <div>
            <button className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-sm text-xs font-medium text-gray-700 transition-colors border border-black mb-8">
              <ArrowDownRight className="w-4 h-4" />
              <span>RESULTS</span>
            </button>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-hero-sm">
              Driven by
              <br />
              <span className="dm-serif-display-italic">performance</span> Mindset
            </h2>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-md text-gray-600 max-w-2xl leading-relaxed">
              You don&apos;t just hire experts - you hire people with a drive to deliver results. The Teel
              team thrives on impact. When you work with us, you&apos;ll work with a team as ambitious
              about growth as you are.
            </p>

            {/* Desktop Arrows */}
            <div className="hidden md:flex space-x-2 items-center justify-end mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-[#C7C5C5] rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Testimonials Carousel */}
        <div
          ref={desktopCarouselRef}
          className="hidden md:flex space-x-8 overflow-hidden w-full px-12 mt-16"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
            <div key={`${testimonial.id}-${idx}`} className="flex flex-col w-[460px] shrink-0">
              <div className="bg-white border-l-2 border-teal-500 px-4 h-auto flex items-center">

                <blockquote className="text-black leading-relaxed text-lg font-semibold">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center space-x-3 mt-8">
                <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="md:hidden mt-12">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col">
                    <div className="bg-white border-l-2 border-teal-500 px-4 h-auto flex items-center">
                      <blockquote className="text-gray-700 leading-relaxed text-lg">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="flex items-center space-x-3 mt-8">
                      <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-[#C7C5C5] rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
