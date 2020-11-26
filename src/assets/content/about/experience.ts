class Experience {
  id: number;
  employer: string;
  position: string;
  website: string;
  dates: string;
  description: string;

  constructor(id: number, employer: string, position: string, website: string, dates: string, description: string) {
    this.id = id;
    this.employer = employer;
    this.position = position;
    this.website = website;
    this.dates = dates;
    this.description = description;
  }
}

const innovapost = new Experience(
  0,
  "Innovapost",
  "Android/Innovation Developer",
  "https://innovapost.com/",
  "September 2020 - Current",
  "Split between working on the Android-platform team and the 'Innovation Garage'.<br /><strong>Android</strong><ul><li>Fixed production bugs and implemented new features for the Canada Post application</li><li>Worked in a agile-scrum environment</li></ul><strong>Innovation Garage</strong><ul><li>Researched the possibility of implementing progressive registration and OAuth 2.0 on the app</li><li>Part of a pilot team to eliminate the need for ring scanners and instead use wrist-mounted PDTs which automatically (de)activate their scanner based on the accelerometer.</li></ul>"
);


const dcCanada = new Experience(
  1,
  "DC Canada Education Publishing",
  "Web and Mobile Developer",
  "https://www.dc-canada.ca/",
  "January - April 2020",
  "This was my first internship/co-op position.<br /><strong>Web developer</strong><ul><li>Maintained and developed new contents and features on a WordPress powered website</li><li>Integrated MotionPay into the payment system for the Chinese domain which allowed customers to pay by scanning a QR code in Alipay/WeChat pay</ul><strong>Mobile application developer</strong><ul><li>Solo development and design of an Android eBook reader titled 'One Story a Day'</li><li>Connects with the LMS on the <a href=\"https://onestoryaday.ca\">website</a></li></ul>"
);

const experiences = [innovapost, dcCanada];

export default experiences;
