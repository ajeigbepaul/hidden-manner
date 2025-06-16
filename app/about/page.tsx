import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Founder's Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src="/founder.jpg"
                alt="Church Founder"
                fill
                className="object-cover rounded-2xl shadow-xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Founder's Information */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Our Founder</h1>
            
            <div className="text-sm">
              <p className="text-gray-600">
                <strong>Rev (Dr) Francis Tunde Falola</strong>
                {` is the General Overseer of The Hidden Manna Ministries with its headquarters at Osogbo, Osun State.
              The Lord used him to found a Pentecostal church based in Osogbo called 'Manna Bible Church' with few branches in Osun State, Nigeria and Atlanta, United States. The Lord used him mightily to pioneer the Pentecostal Church Movement in Osogbo.`}
             
              </p>
              <br />
              <p className="text-gray-600">
                {`He is a local and international evangelist and very passionate about souls. He is heavily involved in mass crusades in many villages and towns in Nigeria and abroad.`}
              </p>
              <br />
              <p className="text-gray-600">
                {`His television ministry started on 2nd January, 1993 on Osun State Broadcasting Corporation Television (OSBC-TV). The programme tagged 'Manna Time' has been a great blessing to lives.
Rev (Mrs) Olubunmi Falola is the executive Vice-President of The Hidden Manna Ministries. A former Senior dental Nurse, she fulfills the call of God on her life as a Pastor and ardent Intercessor.`}
              </p>

              <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Vision & Mission</h2>
                <p className="text-gray-600">
                We are commissioned by God to preach the gospel of Jesus Christ in Nigeria and all over the world, saving souls from sin, delivering the oppressed and setting the captives free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
