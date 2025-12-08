/**
 * Script to add FAQ schema to 15 priority apps using @quest/seo package
 *
 * This script:
 * 1. Defines contextual FAQs for each app
 * 2. Updates layout.tsx files to import createFAQSchema from @quest/seo
 * 3. Adds FAQ schema to the @graph array in JSON-LD
 */

import fs from 'fs';
import path from 'path';

interface FAQ {
  question: string;
  answer: string;
}

interface AppConfig {
  name: string;
  path: string;
  faqs: FAQ[];
}

// FAQ configurations for all 15 priority apps
const appConfigs: AppConfig[] = [
  // CALCULATOR APPS (5)
  {
    name: 'childcare-calculator',
    path: '/Users/dankeegan/dashboard/apps/childcare-calculator/src/app/layout.tsx',
    faqs: [
      {
        question: 'How does the Childcare Calculator work?',
        answer: 'The calculator estimates your childcare costs based on your location, number of children, and type of care needed. It shows your total weekly and monthly costs, helping you plan your childcare budget.'
      },
      {
        question: 'Is the Childcare Calculator free to use?',
        answer: 'Yes, the calculator is completely free to use with no registration required. Simply enter your details to get instant cost estimates.'
      },
      {
        question: 'What childcare types are included?',
        answer: 'The calculator covers nursery care, childminder services, after-school clubs, and holiday care. You can mix different care types to match your specific needs.'
      },
      {
        question: 'Does it include government funding?',
        answer: 'Yes, the calculator accounts for free childcare hours you may be entitled to, including 15 or 30 hours of funded childcare for eligible families in the UK.'
      },
      {
        question: 'Can I compare childcare costs across different areas?',
        answer: 'Yes, you can adjust the location to see how childcare costs vary across different regions in the UK, helping you make informed decisions about where to live.'
      },
      {
        question: 'How accurate are the cost estimates?',
        answer: 'The calculator uses current UK average rates from official sources and is updated regularly. Actual costs may vary depending on your specific provider and location.'
      }
    ]
  },
  {
    name: 'fuel-cost-calculator',
    path: '/Users/dankeegan/dashboard/apps/fuel-cost-calculator/src/app/layout.tsx',
    faqs: [
      {
        question: 'How does the Fuel Cost Calculator work?',
        answer: 'Enter your journey distance, vehicle\'s MPG (miles per gallon), and current fuel price. The calculator instantly shows your trip\'s fuel cost and total consumption.'
      },
      {
        question: 'Is the Fuel Cost Calculator free?',
        answer: 'Yes, it\'s completely free with no registration or payment required. Calculate unlimited journeys anytime.'
      },
      {
        question: 'Can I calculate costs for multiple journeys?',
        answer: 'Yes, you can calculate costs for individual trips or estimate weekly, monthly, and annual fuel expenses based on your regular mileage.'
      },
      {
        question: 'Does it work for both petrol and diesel?',
        answer: 'Yes, the calculator works for petrol, diesel, and other fuel types. Simply enter the appropriate fuel price for your vehicle type.'
      },
      {
        question: 'How do I find my car\'s MPG?',
        answer: 'Check your vehicle\'s manual, manufacturer website, or use the trip computer display. You can also calculate it by dividing miles driven by fuel consumed.'
      },
      {
        question: 'Are fuel prices updated automatically?',
        answer: 'The calculator uses current UK average fuel prices by default, but you can manually adjust the price to match your local rates for more accurate results.'
      }
    ]
  },
  {
    name: 'gas-rate-calculator',
    path: '/Users/dankeegan/dashboard/apps/gas-rate-calculator/src/app/layout.tsx',
    faqs: [
      {
        question: 'How does the Gas Rate Calculator work?',
        answer: 'The calculator uses meter readings or test dial measurements to calculate the heat input (kW) of your gas appliances. Simply enter your readings for instant results following Gas Safe guidelines.'
      },
      {
        question: 'Is the Gas Rate Calculator free?',
        answer: 'Yes, the calculator is completely free to use with no registration required. It\'s designed as a professional tool for Gas Safe engineers and trainees.'
      },
      {
        question: 'What measurements do I need?',
        answer: 'You need either meter readings taken over a timed period, or test dial measurements showing the volume of gas consumed. The calculator supports both metric and imperial units.'
      },
      {
        question: 'Is this calculator Gas Safe compliant?',
        answer: 'Yes, the calculations follow Gas Safe Register standards and industry best practices for determining appliance heat input and gas consumption rates.'
      },
      {
        question: 'Can I use this for domestic and commercial appliances?',
        answer: 'Yes, the calculator works for both domestic and commercial gas appliances including boilers, cookers, fires, and industrial equipment.'
      },
      {
        question: 'Do I need to enter the calorific value?',
        answer: 'The calculator uses the standard UK calorific value by default, but you can adjust this if you have specific regional data from your gas supplier.'
      },
      {
        question: 'Does it calculate both gross and net heat input?',
        answer: 'Yes, the calculator provides both gross and net kW values, giving you complete data for appliance rating verification and Gas Safe compliance checks.'
      }
    ]
  },
  {
    name: 'salary-calculator',
    path: '/Users/dankeegan/dashboard/apps/salary-calculator/src/app/layout.tsx',
    faqs: [
      {
        question: 'How does the Salary Calculator work?',
        answer: 'Enter your gross salary, and the calculator instantly shows your take-home pay after deducting income tax, National Insurance, student loan repayments, and pension contributions using the latest UK tax rates.'
      },
      {
        question: 'Is the Salary Calculator free?',
        answer: 'Yes, it\'s completely free with no registration required. Calculate your take-home pay as many times as you need.'
      },
      {
        question: 'What tax year does this calculator use?',
        answer: 'The calculator uses the current 2025/26 tax year rates and is updated annually when HMRC announces new tax bands, allowances, and National Insurance thresholds.'
      },
      {
        question: 'Does it include Scottish tax rates?',
        answer: 'Yes, you can select Scotland to apply Scottish income tax rates, which differ from the rest of the UK due to devolved tax powers.'
      },
      {
        question: 'Can I calculate hourly, weekly, or annual salaries?',
        answer: 'Yes, you can enter your salary as an hourly rate, weekly wage, monthly income, or annual salary. The calculator converts and shows all pay frequencies.'
      },
      {
        question: 'Does it include student loan deductions?',
        answer: 'Yes, the calculator includes Plan 1, Plan 2, Plan 4, and Postgraduate Loan deductions based on your income and the relevant repayment thresholds.'
      },
      {
        question: 'Are pension contributions included?',
        answer: 'Yes, you can add your pension contribution percentage, and the calculator shows your take-home pay after both employer and employee pension deductions.'
      }
    ]
  },
  {
    name: 'stamp-duty',
    path: '/Users/dankeegan/dashboard/apps/stamp-duty/src/app/layout.tsx',
    faqs: [
      {
        question: 'How does the Stamp Duty Calculator work?',
        answer: 'Enter your property purchase price and buyer status (first-time buyer, home mover, or additional property). The calculator shows your exact stamp duty bill using current UK rates and thresholds.'
      },
      {
        question: 'Is the Stamp Duty Calculator free?',
        answer: 'Yes, it\'s completely free with no registration or payment required. Calculate stamp duty for unlimited properties.'
      },
      {
        question: 'What are the current stamp duty rates for 2025?',
        answer: 'Rates vary by property value and buyer type. First-time buyers get relief up to £425,000. Standard rates start at 0% up to £250,000, then increase progressively on the amount above each threshold.'
      },
      {
        question: 'Do first-time buyers pay less stamp duty?',
        answer: 'Yes, first-time buyers pay no stamp duty on properties up to £425,000, with relief available on properties up to £625,000 in England and Northern Ireland.'
      },
      {
        question: 'Is there extra stamp duty on second homes?',
        answer: 'Yes, an additional 3% surcharge applies to second homes and buy-to-let properties on top of the standard rates for each band.'
      },
      {
        question: 'Does stamp duty apply in Scotland and Wales?',
        answer: 'No, Scotland uses Land and Buildings Transaction Tax (LBTT) and Wales uses Land Transaction Tax (LTT), which have different rates. This calculator is for England and Northern Ireland only.'
      }
    ]
  },

  // INSURANCE APPS (10)
  {
    name: 'drone-insurance',
    path: '/Users/dankeegan/dashboard/apps/drone-insurance/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does drone insurance cover?',
        answer: 'Drone insurance typically covers public liability for third-party damage, hull insurance for your drone and equipment, theft, and damage during flight. Commercial policies also include professional indemnity.'
      },
      {
        question: 'How much does drone insurance cost in the UK?',
        answer: 'Recreational drone insurance starts from around £50-£100 per year. Commercial drone insurance typically costs £200-£500 annually depending on your equipment value and business use.'
      },
      {
        question: 'Who needs drone insurance?',
        answer: 'Commercial drone operators legally require insurance with minimum £1 million public liability cover. Recreational pilots are not legally required to have insurance, but it\'s highly recommended for protection.'
      },
      {
        question: 'Is drone insurance required by law?',
        answer: 'Yes, commercial drone operators must have insurance. The CAA requires at least £1 million public liability cover for any commercial drone operation in the UK.'
      },
      {
        question: 'What\'s not covered by drone insurance?',
        answer: 'Exclusions typically include deliberate damage, flying in restricted airspace, unregistered drones, criminal activity, and flying outside policy geographical limits or height restrictions.'
      },
      {
        question: 'How do I get a drone insurance quote?',
        answer: 'Use our comparison service to get multiple quotes from UK drone insurance specialists. You\'ll need details about your drone, its value, and how you plan to use it.'
      },
      {
        question: 'Can I get instant drone insurance coverage?',
        answer: 'Yes, many insurers offer instant online cover. Once you purchase your policy, you can typically download your certificate immediately and start flying the same day.'
      }
    ]
  },
  {
    name: 'event-planner',
    path: '/Users/dankeegan/dashboard/apps/event-planner/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does event planner insurance cover?',
        answer: 'Event planner insurance covers public liability for accidents at events, professional indemnity for advice errors, equipment damage, event cancellation, and employer\'s liability if you have staff.'
      },
      {
        question: 'How much does event planner insurance cost?',
        answer: 'Annual premiums typically range from £150-£600 depending on your turnover, event types, and coverage limits. One-off event policies start from around £50-£100.'
      },
      {
        question: 'Do I need insurance as an event planner?',
        answer: 'Yes, most venues require proof of public liability insurance before allowing events. Professional indemnity is also essential to protect against claims from planning mistakes or vendor issues.'
      },
      {
        question: 'Does event insurance cover cancellation?',
        answer: 'Event cancellation cover is available as an add-on and protects against financial losses from venue closure, supplier failure, extreme weather, or other unforeseen circumstances.'
      },
      {
        question: 'What\'s the difference between public liability and professional indemnity?',
        answer: 'Public liability covers physical injury or property damage at events. Professional indemnity covers financial losses from your advice, planning mistakes, or failure to deliver agreed services.'
      },
      {
        question: 'Can I get insurance for a single event?',
        answer: 'Yes, single-event policies are available for one-off occasions. However, annual policies are more cost-effective if you plan more than 3-4 events per year.'
      }
    ]
  },
  {
    name: 'esports-event',
    path: '/Users/dankeegan/dashboard/apps/esports-event/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does esports event insurance cover?',
        answer: 'Coverage includes public liability for attendee injuries, equipment insurance for gaming hardware, event cancellation, cyber liability, and protection for streaming equipment and prize money.'
      },
      {
        question: 'How much does esports event insurance cost?',
        answer: 'Insurance for small tournaments starts from £100-£200. Larger esports events with substantial prize pools and equipment can cost £500-£2,000 depending on scale and coverage.'
      },
      {
        question: 'Who needs esports event insurance?',
        answer: 'Tournament organizers, esports venues, LAN party hosts, and gaming cafes all need insurance to protect against liability claims, equipment damage, and event cancellation costs.'
      },
      {
        question: 'Does it cover gaming equipment damage?',
        answer: 'Yes, specialist policies cover gaming PCs, consoles, monitors, VR equipment, streaming hardware, and networking equipment against theft, damage, and technical failure during events.'
      },
      {
        question: 'Is cyber liability included?',
        answer: 'Many esports policies include cyber liability to cover DDoS attacks, data breaches, stream hijacking, and other cyber incidents that could disrupt your tournament or expose attendee data.'
      },
      {
        question: 'Can I insure online-only esports tournaments?',
        answer: 'Yes, you can get coverage for virtual events including protection for technical failures, cyber attacks, and professional indemnity for organizing and running online competitions.'
      }
    ]
  },
  {
    name: 'film-production',
    path: '/Users/dankeegan/dashboard/apps/film-production/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does film production insurance cover?',
        answer: 'Coverage includes equipment insurance, public liability, cast insurance, errors and omissions (E&O), props and wardrobe, location damage, and production interruption due to unforeseen circumstances.'
      },
      {
        question: 'How much does film production insurance cost?',
        answer: 'Short film insurance starts from £200-£500. Feature films and commercials typically pay 1-3% of the production budget. A £100,000 production might cost £1,000-£3,000 to insure.'
      },
      {
        question: 'Is film production insurance required?',
        answer: 'Yes, most locations, equipment rental companies, and distributors require proof of insurance. Broadcasters and streaming platforms mandate E&O insurance before they\'ll air your content.'
      },
      {
        question: 'What equipment is covered?',
        answer: 'Cameras, lenses, lighting, audio equipment, drones, editing systems, and all owned or hired production gear. Coverage includes theft, damage, and loss on location or in transit.'
      },
      {
        question: 'Does it cover cast and crew?',
        answer: 'Yes, you can add cast insurance covering illness or injury that delays production, plus employer\'s liability for crew and public liability for all people on set.'
      },
      {
        question: 'What is E&O insurance and do I need it?',
        answer: 'Errors & Omissions insurance protects against claims of copyright infringement, defamation, and privacy violations. It\'s essential for distribution and required by most broadcasters and platforms.'
      }
    ]
  },
  {
    name: 'mobility-scooter-insurance',
    path: '/Users/dankeegan/dashboard/apps/mobility-scooter-insurance/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does mobility scooter insurance cover?',
        answer: 'Coverage includes third-party liability for injury or damage to others, theft and damage to your scooter, personal accident cover, and breakdown assistance. Some policies also cover accessories and batteries.'
      },
      {
        question: 'How much does mobility scooter insurance cost?',
        answer: 'Annual premiums typically range from £60-£200 depending on scooter value, usage (pavement or road), and coverage level. Class 3 road-legal scooters cost more to insure than Class 2.'
      },
      {
        question: 'Is mobility scooter insurance required by law?',
        answer: 'Class 3 mobility scooters used on roads legally require third-party insurance. Class 2 pavement scooters don\'t legally require insurance, but it\'s strongly recommended for liability protection.'
      },
      {
        question: 'What\'s the difference between Class 2 and Class 3 scooters?',
        answer: 'Class 2 scooters have a maximum speed of 4mph and are for pavement use only. Class 3 scooters can reach 8mph, have lights and indicators, and can be used on roads.'
      },
      {
        question: 'Does insurance cover battery replacement?',
        answer: 'Some policies include accidental battery damage, but normal battery wear and tear is usually excluded. Check your policy for specific battery coverage terms.'
      },
      {
        question: 'Can I get breakdown cover for my mobility scooter?',
        answer: 'Yes, most insurers offer breakdown cover as standard or as an optional add-on, providing recovery if your scooter breaks down away from home.'
      }
    ]
  },
  {
    name: 'tractor-insurance',
    path: '/Users/dankeegan/dashboard/apps/tractor-insurance/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does agricultural tractor insurance cover?',
        answer: 'Coverage includes third-party liability, accidental damage, theft, fire, malicious damage, breakdown recovery, and attached implements. You can add cover for agricultural employees and business use.'
      },
      {
        question: 'How much does tractor insurance cost?',
        answer: 'Premiums vary significantly based on tractor value, usage, and security. Expect to pay £200-£800 annually for a standard farm tractor, with vintage and high-value models costing more.'
      },
      {
        question: 'Is tractor insurance required by law?',
        answer: 'Yes, if you use your tractor on public roads, you legally need at least third-party insurance. Even for private land use only, insurance is strongly recommended.'
      },
      {
        question: 'Does it cover attached equipment and implements?',
        answer: 'Yes, most policies cover permanently attached equipment. Towed implements like ploughs, harrows, and trailers can be added to your policy for additional premium.'
      },
      {
        question: 'Can I insure vintage or classic tractors?',
        answer: 'Yes, specialist policies are available for vintage and classic tractors with agreed value cover, show use, and restoration coverage tailored to collector needs.'
      },
      {
        question: 'What about using tractors on public roads?',
        answer: 'Road use is covered, but you must ensure your tractor is roadworthy, properly registered, and complies with DVLA regulations including lights, reflectors, and registration plates.'
      }
    ]
  },
  {
    name: 'village-fete',
    path: '/Users/dankeegan/dashboard/apps/village-fete/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does village fete insurance cover?',
        answer: 'Coverage includes public liability for visitor injuries, marquee and equipment insurance, event cancellation, weather cover, and protection for fundraising activities like raffles and competitions.'
      },
      {
        question: 'How much does village fete insurance cost?',
        answer: 'Single-event fete insurance typically costs £75-£200 depending on expected attendance, activities planned, and whether you include cancellation cover. Annual policies for regular events are more economical.'
      },
      {
        question: 'Do we need insurance for a small village fete?',
        answer: 'Yes, most venues and councils require proof of public liability insurance. It protects your committee and volunteers from personal financial liability if someone is injured at the event.'
      },
      {
        question: 'Does it cover weather cancellation?',
        answer: 'Weather cover is available as an add-on and pays out if excessive rain, wind, or snow forces cancellation. You\'ll need to set trigger points like rainfall measurements for claims.'
      },
      {
        question: 'Are volunteers and committee members covered?',
        answer: 'Yes, public liability insurance covers organizers, committee members, and volunteers acting on behalf of the event. Consider trustee indemnity for committee financial protection too.'
      },
      {
        question: 'What about funfair rides and inflatables?',
        answer: 'Equipment suppliers should have their own insurance, but verify this. Your policy should cover your liability for hiring them. Higher-risk activities may need specific cover.'
      }
    ]
  },
  {
    name: 'yoga-insurance',
    path: '/Users/dankeegan/dashboard/apps/yoga-insurance/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does yoga teacher insurance cover?',
        answer: 'Coverage includes public liability for student injuries, professional indemnity for advice claims, equipment insurance, and treatment risk cover. Some policies include online class coverage.'
      },
      {
        question: 'How much does yoga teacher insurance cost?',
        answer: 'Annual premiums range from £60-£200 depending on class frequency, student numbers, and whether you teach at studios, outdoors, online, or from home.'
      },
      {
        question: 'Do I need insurance to teach yoga?',
        answer: 'Most studios, gyms, and venues require proof of insurance before allowing you to teach. It\'s also essential for protecting yourself financially from injury claims and professional negligence.'
      },
      {
        question: 'Does it cover online yoga classes?',
        answer: 'Yes, many modern policies include online teaching via Zoom, YouTube, or pre-recorded content. Check your policy specifically mentions virtual/online class coverage.'
      },
      {
        question: 'What\'s the difference between public liability and professional indemnity?',
        answer: 'Public liability covers physical injuries to students. Professional indemnity covers financial losses from poor advice, incorrect technique instruction, or failure to identify student health issues.'
      },
      {
        question: 'Am I covered for outdoor yoga sessions?',
        answer: 'Yes, most policies cover outdoor teaching in parks, beaches, and gardens. Check geographical limits and whether you need additional cover for specific locations or events.'
      },
      {
        question: 'Do I need insurance if I only teach occasionally?',
        answer: 'Yes, even occasional teaching needs insurance. One injury claim could cost thousands. Many insurers offer flexible policies for part-time teachers at reduced rates.'
      }
    ]
  },
  {
    name: 'special-event',
    path: '/Users/dankeegan/dashboard/apps/special-event/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does special event insurance cover?',
        answer: 'Coverage includes public liability for attendee injuries, event cancellation due to unforeseen circumstances, weather disruption, supplier failure, property damage, and equipment insurance for hired or owned items.'
      },
      {
        question: 'How much does special event insurance cost?',
        answer: 'One-day event insurance starts from £50-£150 for small gatherings. Larger events with 500+ attendees typically cost £200-£500. Wedding and corporate events may cost more based on value and risk.'
      },
      {
        question: 'What types of events can be insured?',
        answer: 'Weddings, birthday parties, corporate functions, charity galas, festivals, concerts, exhibitions, and virtually any planned gathering. Each event type may need specific coverage tailored to its risks.'
      },
      {
        question: 'Does it cover event cancellation?',
        answer: 'Yes, cancellation cover protects your deposits and costs if you must cancel due to illness, venue closure, extreme weather, supplier bankruptcy, or other covered reasons beyond your control.'
      },
      {
        question: 'How late can I purchase event insurance?',
        answer: 'Most insurers require at least 14-30 days notice before your event. Some offer last-minute cover, but cancellation insurance must typically be purchased soon after making your first deposit.'
      },
      {
        question: 'Does it cover marquee and equipment hire?',
        answer: 'Yes, you can insure hired marquees, furniture, sound systems, lighting, and catering equipment against damage or theft. Check if your hire company\'s insurance is sufficient first.'
      }
    ]
  },
  {
    name: 'craft-fair',
    path: '/Users/dankeegan/dashboard/apps/craft-fair/src/app/layout.tsx',
    faqs: [
      {
        question: 'What does craft fair insurance cover?',
        answer: 'Coverage includes public liability for visitor injuries, product liability for items sold, stock insurance against theft or damage, stall equipment protection, and personal accident cover for stallholders.'
      },
      {
        question: 'How much does craft fair insurance cost?',
        answer: 'Single-event policies start from £30-£60. Annual policies for regular craft fair traders typically cost £80-£200 depending on stock value, sales turnover, and coverage limits.'
      },
      {
        question: 'Do I need insurance for selling at craft fairs?',
        answer: 'Yes, most craft fair organizers require proof of public liability insurance before allowing you to trade. It\'s essential for protecting yourself from injury claims and product liability issues.'
      },
      {
        question: 'What\'s the difference between public and product liability?',
        answer: 'Public liability covers injuries to visitors at your stall. Product liability covers claims from products you sell causing harm later, such as jewelry causing allergic reactions or unsafe toys.'
      },
      {
        question: 'Does it cover my stock and materials?',
        answer: 'Yes, you can add stock insurance to cover your handmade items, raw materials, and finished products against theft, damage, or loss during transport and at the event.'
      },
      {
        question: 'Can I get annual cover for multiple craft fairs?',
        answer: 'Yes, annual policies are more cost-effective if you attend 3+ events per year. They provide continuous cover for all events, markets, and sometimes even online sales.'
      }
    ]
  }
];

function updateLayoutWithFAQ(config: AppConfig): void {
  const { name, path: layoutPath, faqs } = config;

  console.log(`\nProcessing: ${name}`);
  console.log(`Path: ${layoutPath}`);

  if (!fs.existsSync(layoutPath)) {
    console.error(`❌ Layout file not found: ${layoutPath}`);
    return;
  }

  let content = fs.readFileSync(layoutPath, 'utf-8');

  // Check if createFAQSchema is already imported
  if (!content.includes('createFAQSchema')) {
    // Add import at the top of the file, after other imports
    const importStatement = "import { createFAQSchema } from '@quest/seo/json-ld'\n";

    // Find the last import statement
    const importRegex = /^import .+$/gm;
    const imports = content.match(importRegex);

    if (imports && imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      content = content.replace(lastImport, `${lastImport}\n${importStatement}`);
    } else {
      // If no imports found, add at the beginning
      content = importStatement + content;
    }
  }

  // Generate FAQ array code
  const faqArrayCode = `\n// FAQ data for rich snippets\nconst faqs = ${JSON.stringify(faqs, null, 2)}\n`;

  // Insert FAQ array before the jsonLd definition
  const jsonLdMatch = content.match(/const jsonLd = \{/);
  if (jsonLdMatch && jsonLdMatch.index) {
    const insertPosition = jsonLdMatch.index;
    content = content.slice(0, insertPosition) + faqArrayCode + '\n' + content.slice(insertPosition);
  } else {
    console.error(`❌ Could not find jsonLd definition in ${name}`);
    return;
  }

  // Check if FAQ schema is already in the @graph
  if (content.includes('createFAQSchema(faqs)')) {
    console.log(`⚠️  FAQ schema already exists in ${name}, skipping...`);
    return;
  }

  // Add FAQ schema to the @graph array
  // Find the closing bracket of the @graph array
  const graphPattern = /'@graph':\s*\[([\s\S]*?)\n\s*\]/;
  const graphMatch = content.match(graphPattern);

  if (graphMatch) {
    const graphContent = graphMatch[1];
    // Add comma after the last item if it doesn't have one
    const lastBracket = graphContent.lastIndexOf('}');
    let updatedGraph = graphContent;

    // Check if there's already a comma after the last closing brace
    const afterLastBrace = graphContent.slice(lastBracket + 1).trim();
    if (!afterLastBrace.startsWith(',')) {
      updatedGraph = graphContent.slice(0, lastBracket + 1) + ',' + graphContent.slice(lastBracket + 1);
    }

    // Add the FAQ schema using spread operator
    const faqSchemaEntry = '\n    ...createFAQSchema(faqs),';
    updatedGraph = updatedGraph + faqSchemaEntry;

    content = content.replace(graphPattern, `'@graph': [${updatedGraph}\n  ]`);
  } else {
    console.error(`❌ Could not find @graph array in ${name}`);
    return;
  }

  // Write the updated content back to the file
  fs.writeFileSync(layoutPath, content, 'utf-8');
  console.log(`✅ Successfully updated ${name} with ${faqs.length} FAQs`);
}

// Main execution
console.log('='.repeat(80));
console.log('FAQ Schema Implementation Script');
console.log('Adding FAQ structured data to 15 priority apps');
console.log('='.repeat(80));

let successCount = 0;
let errorCount = 0;

// Process calculator apps first
console.log('\n' + '='.repeat(80));
console.log('CALCULATOR APPS (5 apps)');
console.log('='.repeat(80));

const calculatorApps = appConfigs.slice(0, 5);
for (const config of calculatorApps) {
  try {
    updateLayoutWithFAQ(config);
    successCount++;
  } catch (error) {
    console.error(`❌ Error processing ${config.name}:`, error);
    errorCount++;
  }
}

// Process insurance apps
console.log('\n' + '='.repeat(80));
console.log('INSURANCE APPS (10 apps)');
console.log('='.repeat(80));

const insuranceApps = appConfigs.slice(5);
for (const config of insuranceApps) {
  try {
    updateLayoutWithFAQ(config);
    successCount++;
  } catch (error) {
    console.error(`❌ Error processing ${config.name}:`, error);
    errorCount++;
  }
}

// Summary
console.log('\n' + '='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log(`Total apps processed: ${appConfigs.length}`);
console.log(`✅ Successful: ${successCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log('\nNext Steps:');
console.log('1. Review the updated layout.tsx files');
console.log('2. Test with Google Rich Results Test: https://search.google.com/test/rich-results');
console.log('3. Build and deploy the apps to verify FAQ schema appears correctly');
console.log('='.repeat(80));
