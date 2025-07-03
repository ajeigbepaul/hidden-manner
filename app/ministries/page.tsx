import { FaChurch, FaBook, FaTv, FaUsers, FaCross, FaRegNewspaper } from 'react-icons/fa';

const ministries = [
  {
    icon: <FaChurch className="mx-auto mb-4 text-4xl text-primary" />,
    title: 'Manna Bible Church',
    description: (
      <>
        The Headquarters church is "Manna Cathedral" (under construction) located at Manna Miracle Arena, the World Headquarters of The Hidden Manna Ministries.<br /><br />
        Manna Miracle Arena is located behind Ilesha garage, off Ilesa road, the new express road, Osogbo.<br /><br />
        The church has branches in Osogbo, some towns in Nigeria and in Atlanta, USA.
      </>
    ),
  },
  {
    icon: <FaBook className="mx-auto mb-4 text-4xl text-primary" />,
    title: 'Manna Bible School',
    description: (
      <>
        The Bible School of our ministry is where we train men and women to be useful to God in this end-time.<br /><br />
        They undergo three-months, six months or one year courses, depending on the type of the training being sought.<br /><br />
        The school also organizes one day Bible training seminars to minister to the men and women of God around.
      </>
    ),
  },
  {
    icon: <FaTv className="mx-auto mb-4 text-4xl text-primary" />,
    title: 'Manna Time',
    description: (
      <>
        The President, Rev. Francis Tunde Falola, sends out the word of God through Television under the Manna Time television outreach.<br /><br />
        It started on 2nd January, 1993 on Osun State Broadcasting Corporation Television (OSBC-TV). Rev'd Francis Tunde Falola can now be enjoyed on:<br /><br />
        <strong>Omega Satellite Channel (MyTV) - every Sunday from 5:00pm - 5:30pm</strong>
      </>
    ),
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-4xl text-primary" />,
    title: 'Manna Convention',
    description: (
      <>
        This is an annual gathering of believers from different churches, denominations and fellowships in the first week of December to be fed with the word of God.<br /><br />
        Seasonal Ministers of the gospel from both Nigeria and abroad, are always invited to bless the attendees.
      </>
    ),
  },
  {
    icon: <FaCross className="mx-auto mb-4 text-4xl text-primary" />,
    title: 'Manna Miracle Crusade',
    description: (
      <>
        The ministry holds indoor and open-air crusades both in Nigeria and overseas. The main focus of each crusade is to win souls for Jesus Christ, to set the oppressed or demon possessed free and to heal the sick.<br /><br />
        In each crusade is incorporated "Ministers/Church Workers' Conference" to teach the ministers and the Church workers in that area to be on "fire" for God in order to deliver the locality from the shackles of the devil.<br /><br />
        The crusade can be by invitation from churches, fellowships and ministries or by planning and financing from our ministry.
      </>
    ),
  },
  {
    icon: <FaRegNewspaper className="mx-auto mb-4 text-4xl text-primary" />,
    title: 'Manna Publishing Company',
    description: (
      <>
        This arm handles the publishing of our magazines called "The Hidden Manna"(ISSN 0795-910X), several titles of books and tracts.<br /><br />
        Our magazines have circulated in Nigeria and many countries abroad. Over twenty books have been published.
      </>
    ),
  },
];

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Ministries</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the arms of our ministry and the many ways we serve, teach, and reach out to the world.
          </p>
        </div>
        <div className="grid gap-10 md:gap-12">
          {ministries.map((ministry, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
              {ministry.icon}
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{ministry.title}</h2>
              <div className="text-gray-700 text-base leading-relaxed max-w-2xl">
                {ministry.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
