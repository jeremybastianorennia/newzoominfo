// ZoomInfo Account Data - Updated with new columns
const zoomInfoData = [
  {
    "Company Name": "Innovative Inc",
    "Who it is assigned to": "Taylor Smith",
    "Account Type": "Prospect",
    "Prospect Score": 90,
    "Account Notes": "Top 10 account",
    "Drop Notes": "Do not call",
    "Website": "www.innovativeinc.com",
    "LinkedinURL": "https://linkedin.com/company/0",
    "Revenue Estimate": "$10 mil. - $25 mil.",
    "# of Employees": 82,
    "Head Office": "Charlotte, North Carolina",
    "Country": "United States",
    "Segmentation": "Mid-Market"
  },
  {
    "Company Name": "Global Corp",
    "Who it is assigned to": "Taylor Smith",
    "Account Type": "Suspect",
    "Prospect Score": 94,
    "Account Notes": "Strong pipeline",
    "Drop Notes": "Do not call",
    "Website": "www.globalcorp.com",
    "LinkedinURL": "https://linkedin.com/company/1",
    "Revenue Estimate": "$5 mil. - $10 mil.",
    "# of Employees": 39,
    "Head Office": "Raleigh, North Carolina",
    "Country": "United States",
    "Segmentation": "Enterprise"
  },
  {
    "Company Name": "Fusion Group",
    "Who it is assigned to": "Morgan Lee",
    "Account Type": "Suspect",
    "Prospect Score": 83,
    "Account Notes": "Follow-up Q3",
    "Drop Notes": "Nurture",
    "Website": "www.fusiongroup.com",
    "LinkedinURL": "https://linkedin.com/company/2",
    "Revenue Estimate": "$10 mil. - $25 mil.",
    "# of Employees": 21,
    "Head Office": "Henderson, Nevada",
    "Country": "United States",
    "Segmentation": "SMB"
  },
  {
    "Company Name": "Momentum Corp",
    "Who it is assigned to": "Taylor Smith",
    "Account Type": "Customer",
    "Prospect Score": 88,
    "Account Notes": "Repeat outreach",
    "Drop Notes": "Check in 2026",
    "Website": "www.momentumcorp.com",
    "LinkedinURL": "https://linkedin.com/company/3",
    "Revenue Estimate": "$500,000 - $1 mil.",
    "# of Employees": 7,
    "Head Office": "San Antonio, Texas",
    "Country": "United States",
    "Segmentation": "Mid-Market"
  },
  {
    "Company Name": "Innovative Systems",
    "Who it is assigned to": "Jordan Green",
    "Account Type": "Prospect",
    "Prospect Score": 89,
    "Account Notes": "Repeat outreach",
    "Drop Notes": "Ready if budget",
    "Website": "www.innovativesystems.com",
    "LinkedinURL": "https://linkedin.com/company/4",
    "Revenue Estimate": "$500,000 - $1 mil.",
    "# of Employees": 9,
    "Head Office": "Denver, Colorado",
    "Country": "United States",
    "Segmentation": "Enterprise"
  },
  {
    "Company Name": "Apex Enterprises",
    "Who it is assigned to": "Jordan Green",
    "Account Type": "Prospect",
    "Prospect Score": 75,
    "Account Notes": "Repeat outreach",
    "Drop Notes": "Do not call",
    "Website": "www.apexenterprises.com",
    "LinkedinURL": "https://linkedin.com/company/5",
    "Revenue Estimate": "$10 mil. - $25 mil.",
    "# of Employees": 40,
    "Head Office": "Charlotte, North Carolina",
    "Country": "United States",
    "Segmentation": "SMB"
  },
  {
    "Company Name": "Velocity Ltd",
    "Who it is assigned to": "Morgan Lee",
    "Account Type": "Target",
    "Prospect Score": 55,
    "Account Notes": "High potential",
    "Drop Notes": "Do not call",
    "Website": "www.velocityltd.com",
    "LinkedinURL": "https://linkedin.com/company/6",
    "Revenue Estimate": "Over $5 bil.",
    "# of Employees": 39993,
    "Head Office": "Santa Ana, California",
    "Country": "United States",
    "Segmentation": "SMB"
  },
  {
    "Company Name": "Future Technologies",
    "Who it is assigned to": "Morgan Lee",
    "Account Type": "Target",
    "Prospect Score": 72,
    "Account Notes": "Top 10 account",
    "Drop Notes": "Do not call",
    "Website": "www.futuretechnologies.com",
    "LinkedinURL": "https://linkedin.com/company/7",
    "Revenue Estimate": "$50 mil. - $100 mil.",
    "# of Employees": 238,
    "Head Office": "Bakersfield, California",
    "Country": "United States",
    "Segmentation": "Mid-Market"
  },
  {
    "Company Name": "Synergy Systems",
    "Who it is assigned to": "Alex Kim",
    "Account Type": "Prospect",
    "Prospect Score": 74,
    "Account Notes": "Top 10 account",
    "Drop Notes": "Do not call",
    "Website": "www.synergysystems.com",
    "LinkedinURL": "https://linkedin.com/company/8",
    "Revenue Estimate": "$10 mil. - $25 mil.",
    "# of Employees": 36,
    "Head Office": "Columbus, Ohio",
    "Country": "United States",
    "Segmentation": "SMB"
  },
  {
    "Company Name": "Pioneer LLC",
    "Who it is assigned to": "Taylor Smith",
    "Account Type": "Customer",
    "Prospect Score": 60,
    "Account Notes": "High potential",
    "Drop Notes": "Nurture",
    "Website": "www.pioneerllc.com",
    "LinkedinURL": "https://linkedin.com/company/9",
    "Revenue Estimate": "$10 mil. - $25 mil.",
    "# of Employees": 55,
    "Head Office": "Fort Worth, Texas",
    "Country": "United States",
    "Segmentation": "SMB"
  },
  {
    "Company Name": "Dynamic Solutions",
    "Who it is assigned to": "Morgan Lee",
    "Account Type": "Suspect",
    "Prospect Score": 97,
    "Account Notes": "High potential",
    "Drop Notes": "Ready if budget",
    "Website": "www.dynamicsolutions.com",
    "LinkedinURL": "https://linkedin.com/company/10",
    "Revenue Estimate": "$25 mil. - $50 mil.",
    "# of Employees": 125,
    "Head Office": "Seattle, Washington",
    "Country": "United States",
    "Segmentation": "Enterprise"
  },
  {
    "Company Name": "Strategic Partners",
    "Who it is assigned to": "Morgan Lee",
    "Account Type": "Customer",
    "Prospect Score": 89,
    "Account Notes": "Repeat outreach",
    "Drop Notes": "Nurture",
    "Website": "www.strategicpartners.com",
    "LinkedinURL": "https://linkedin.com/company/11",
    "Revenue Estimate": "$100 mil. - $250 mil.",
    "# of Employees": 450,
    "Head Office": "Chicago, Illinois",
    "Country": "United States",
    "Segmentation": "Mid-Market"
  },
  {
    "Company Name": "Elite Manufacturing",
    "Who it is assigned to": "Jordan Green",
    "Account Type": "Target",
    "Prospect Score": 58,
    "Account Notes": "Top 10 account",
    "Drop Notes": "Do not call",
    "Website": "www.elitemanufacturing.com",
    "LinkedinURL": "https://linkedin.com/company/12",
    "Revenue Estimate": "$250 mil. - $500 mil.",
    "# of Employees": 1250,
    "Head Office": "Detroit, Michigan",
    "Country": "United States",
    "Segmentation": "SMB"
  },
  {
    "Company Name": "Digital Media Group",
    "Who it is assigned to": "Alex Kim",
    "Account Type": "Target",
    "Prospect Score": 69,
    "Account Notes": "Repeat outreach",
    "Drop Notes": "Nurture",
    "Website": "www.digitalmediagroup.com",
    "LinkedinURL": "https://linkedin.com/company/13",
    "Revenue Estimate": "$50 mil. - $100 mil.",
    "# of Employees": 180,
    "Head Office": "Los Angeles, California",
    "Country": "United States",
    "Segmentation": "Mid-Market"
  },
  {
    "Company Name": "Healthcare Innovations",
    "Who it is assigned to": "Jordan Green",
    "Account Type": "Prospect",
    "Prospect Score": 68,
    "Account Notes": "Strong pipeline",
    "Drop Notes": "Do not call",
    "Website": "www.healthcareinnovations.com",
    "LinkedinURL": "https://linkedin.com/company/14",
    "Revenue Estimate": "$100 mil. - $250 mil.",
    "# of Employees": 650,
    "Head Office": "Boston, Massachusetts",
    "Country": "United States",
    "Segmentation": "Mid-Market"
  },
  {
    "Company Name": "Energy Solutions Inc",
    "Who it is assigned to": "Jordan Green",
    "Account Type": "Suspect",
    "Prospect Score": 59,
    "Account Notes": "Follow-up Q3",
    "Drop Notes": "Check in 2026",
    "Website": "www.energysolutionsinc.com",
    "LinkedinURL": "https://linkedin.com/company/15",
    "Revenue Estimate": "$500 mil. - $1 bil.",
    "# of Employees": 2800,
    "Head Office": "Houston, Texas",
    "Country": "United States",
    "Segmentation": "Enterprise"
  },
  {
    "Company Name": "Construction Masters",
    "Who it is assigned to": "Taylor Smith",
    "Account Type": "Customer",
    "Prospect Score": 95,
    "Account Notes": "Repeat outreach",
    "Drop Notes": "Check in 2026",
    "Website": "www.constructionmasters.com",
    "LinkedinURL": "https://linkedin.com/company/16",
    "Revenue Estimate": "$25 mil. - $50 mil.",
    "# of Employees": 95,
    "Head Office": "Phoenix, Arizona",
    "Country": "United States",
    "Segmentation": "Enterprise"
  },
  {
    "Company Name": "Telecom Networks",
    "Who it is assigned to": "Taylor Smith",
    "Account Type": "Suspect",
    "Prospect Score": 71,
    "Account Notes": "Top 10 account",
    "Drop Notes": "Nurture",
    "Website": "www.telecomnetworks.com",
    "LinkedinURL": "https://linkedin.com/company/17",
    "Revenue Estimate": "$100 mil. - $250 mil.",
    "# of Employees": 520,
    "Head Office": "Atlanta, Georgia",
    "Country": "United States",
    "Segmentation": "SMB"
  },
  {
    "Company Name": "Real Estate Pros",
    "Who it is assigned to": "Jordan Green",
    "Account Type": "Suspect",
    "Prospect Score": 87,
    "Account Notes": "Strong pipeline",
    "Drop Notes": "Ready if budget",
    "Website": "www.realestatepros.com",
    "LinkedinURL": "https://linkedin.com/company/18",
    "Revenue Estimate": "$10 mil. - $25 mil.",
    "# of Employees": 35,
    "Head Office": "Miami, Florida",
    "Country": "United States",
    "Segmentation": "Mid-Market"
  },
  {
    "Company Name": "Retail Giants",
    "Who it is assigned to": "Alex Kim",
    "Account Type": "Suspect",
    "Prospect Score": 79,
    "Account Notes": "Strong pipeline",
    "Drop Notes": "Ready if budget",
    "Website": "www.retailgiants.com",
    "LinkedinURL": "https://linkedin.com/company/19",
    "Revenue Estimate": "$250 mil. - $500 mil.",
    "# of Employees": 1800,
    "Head Office": "Minneapolis, Minnesota",
    "Country": "United States",
    "Segmentation": "SMB"
  }
];

// Wait for DOM and password unlock
document.addEventListener('DOMContentLoaded', function() {
    // Simple table population - no complex filtering initially
    const tbody = document.getElementById('resultsBody');
    const countDiv = document.getElementById('resultsCount');
    
    if (!tbody) {
        console.error('Table body element not found! Check your HTML.');
        return;
    }
    
    console.log('Loading', zoomInfoData.length, 'records');
    
    // Clear table
    tbody.innerHTML = '';

// Dynamic color gradient for prospect score (red → yellow → green)
function getScoreStyle(score) {
    // Ensure the score is between 0 and 100
    let normalized = Math.max(0, Math.min(100, score)) / 100;
    // Color stops: 0=red, 0.5=yellow, 1=green
    let r, g, b;
    if (normalized < 0.5) {
        // Red to Yellow
        r = 255;
        g = Math.round(510 * normalized); // 0 to 255 as score goes 0-50
        b = 0;
    } else {
        // Yellow to Green
        r = Math.round(510 * (1 - normalized)); // 255 to 0 as score goes 50-100
        g = 255;
        b = 0;
    }

  <td><span style="${getScoreStyle(item['Prospect Score'])}">
    ${item['Prospect Score'] || 'N/A'}
</span></td>

    // Light text on dark color, dark text on bright
    let textColor = (g < 180 && r > 160) ? 'black' : 'white';
    // Style string
    return `background-color: rgb(${r}, ${g}, ${b}); color: ${textColor}; font-weight: 600; padding: 4px 8px; border-radius: 6px; min-width: 30px; display: inline-block; text-align: center;`;
}
    
    // Add each row
    zoomInfoData.forEach(item => {
        const row = document.createElement('tr');
        const website = item.Website.startsWith('http') ? item.Website : `https://${item.Website}`;
        
        row.innerHTML = `
            <td><strong>${item['Company Name']}</strong></td>
            <td>${item['Who it is assigned to']}</td>
            <td>${item['Account Type']}</td>
            <td>${item['Prospect Score']}</td>
            <td>${item['Account Notes']}</td>
            <td>${item['Drop Notes']}</td>
            <td><a href="${website}" target="_blank">${item.Website}</a></td>
            <td><a href="${item.LinkedinURL}" target="_blank">LinkedIn</a></td>
            <td>${item['Revenue Estimate']}</td>
            <td>${item['# of Employees'].toLocaleString()}</td>
            <td>${item['Head Office']}</td>
            <td>${item.Country}</td>
            <td>${item.Segmentation}</td>
        `;
        tbody.appendChild(row);
    });
    
    if (countDiv) {
        countDiv.textContent = `${zoomInfoData.length} accounts found`;
    }
    
    console.log('Table populated successfully');
});
