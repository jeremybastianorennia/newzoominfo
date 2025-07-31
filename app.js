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
let filteredData = [...zoomInfoData];
let currentSortColumn = null;
let currentSortDirection = 'asc';
let prospectScoreMinInput, prospectScoreMaxInput, scoreMinValue, scoreMaxValue;


// DOM elements
let revenueFilter, minEmployeesInput, maxEmployeesInput, locationFilter, 
    searchInput, resultsBody, resultsCount, clearFiltersBtn, exportDataBtn, loadingIndicator;

function handleFilterChange() {
    showLoading();
    setTimeout(() => {
        applyAllFilters();
        hideLoading();
    }, 50);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    console.log('App starting, data length:', zoomInfoData.length);

    revenueFilter = document.getElementById('revenueFilter');
    minEmployeesInput = document.getElementById('minEmployees');
    maxEmployeesInput = document.getElementById('maxEmployees');
    locationFilter = document.getElementById('locationFilter');
    searchInput = document.getElementById('searchInput');
    resultsBody = document.getElementById('resultsBody');
    resultsCount = document.getElementById('resultsCount');
    clearFiltersBtn = document.getElementById('clearFilters');
    exportDataBtn = document.getElementById('exportData');
    loadingIndicator = document.getElementById('loadingIndicator');
scoreMinValue = document.getElementById('scoreMinValue');
scoreMaxValue = document.getElementById('scoreMaxValue');
  prospectScoreSlider = document.getElementById('prospectScoreSlider');
    populateLocationFilter();
    attachEventListeners();


    filteredData = [...zoomInfoData];
    renderTable();
  if (prospectScoreSlider && typeof noUiSlider !== 'undefined') {
    noUiSlider.create(prospectScoreSlider, {
        start: [0, 100],
        connect: true,
        step: 1,
        range: { min: 0, max: 100 },
        tooltips: true,
        format: {
            to: value => Math.round(value),
            from: value => Number(value)
        }
    });

    prospectScoreSlider.noUiSlider.on('update', function(values) {
        let min = Math.round(values[0]);
        let max = Math.round(values[1]);
        scoreMinValue.textContent = min;
        scoreMaxValue.textContent = max;
        handleFilterChange();
    });
} else {
    console.error('prospectScoreSlider or noUiSlider not defined!');
}

});

// Populate location filter
function populateLocationFilter() {
    const uniqueCities = [
        ...new Set(
            zoomInfoData
                .map(item => {
                    const headOffice = item['Head Office'] || '';
                    return headOffice.split(',')[0].trim();
                })
                .filter(city => city) // Remove empty or undefined
        )
    ].sort(); // Sort alphabetically

    // Clear existing options
    locationFilter.innerHTML = '';

    // Add default "All" option if desired
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'All Locations';
    locationFilter.appendChild(defaultOption);

    // Add each unique city to the dropdown
    uniqueCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        locationFilter.appendChild(option);
    });
}


// Attach event listeners
function attachEventListeners() {
    revenueFilter.addEventListener('change', handleFilterChange);
    locationFilter.addEventListener('change', handleFilterChange);
    minEmployeesInput.addEventListener('input', debounce(handleFilterChange, 300));
    maxEmployeesInput.addEventListener('input', debounce(handleFilterChange, 300));
    searchInput.addEventListener('input', debounce(handleFilterChange, 300));
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    exportDataBtn.addEventListener('click', exportToCSV);
  prospectScoreMinInput.addEventListener('input', handleProspectScoreRange);
prospectScoreMaxInput.addEventListener('input', handleProspectScoreRange);


    document.querySelectorAll('[data-sort]').forEach(header => {
        header.addEventListener('click', () => sortTable(header.dataset.sort));
    });
}

function handleProspectScoreRange() {
    let min = parseInt(prospectScoreMinInput.value, 10);
    let max = parseInt(prospectScoreMaxInput.value, 10);

    if (min > max) {
        if (event.target === prospectScoreMinInput) {
            prospectScoreMinInput.value = max;
            min = max;
        } else {
            prospectScoreMaxInput.value = min;
            max = min;
        }
    }

    scoreMinValue.textContent = min;
    scoreMaxValue.textContent = max;

    handleFilterChange();
}

function applyAllFilters() {
    let data = [...zoomInfoData];

    const selectedRevenues = getSelectedOptions(revenueFilter);
    if (selectedRevenues.length > 0) {
        data = data.filter(item => selectedRevenues.includes(item['Revenue Estimate']));
    }

    const minEmployees = parseInt(minEmployeesInput.value) || 0;
    const maxEmployees = parseInt(maxEmployeesInput.value) || Number.MAX_SAFE_INTEGER;

    data = data.filter(item => {
        const empCount = item['# of Employees'];
        return empCount >= minEmployees && empCount <= maxEmployees;
    });

    const selectedCities = getSelectedOptions(locationFilter);
    if (selectedCities.length > 0) {
        data = data.filter(item => {
            const city = item['Head Office'].split(',')[0].trim();
            return selectedCities.includes(city);
        });
    }

    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        data = data.filter(item => {
            return Object.values(item).some(value =>
                String(value).toLowerCase().includes(searchTerm)
            );
        });
    }
const scoreMin = parseInt(prospectScoreMinInput.value, 10) || 0;
const scoreMax = parseInt(prospectScoreMaxInput.value, 10) || 100;
data = data.filter(item => {
    const ps = Number(item["Prospect Score"]);
    return ps >= scoreMin && ps <= scoreMax;
});

    filteredData = data;

    if (currentSortColumn) {
        applySorting();
    }

    renderTable();
}

function getSelectedOptions(selectElement) {
    return Array.from(selectElement.selectedOptions).map(option => option.value);
}

function clearAllFilters() {
    revenueFilter.selectedIndex = -1;
    locationFilter.selectedIndex = -1;
    minEmployeesInput.value = '';
    maxEmployeesInput.value = '';
    searchInput.value = '';

    currentSortColumn = null;
    currentSortDirection = 'asc';
    updateSortIndicators();

    filteredData = [...zoomInfoData];
    renderTable();
}

function sortTable(column) {
    if (currentSortColumn === column) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = column;
        currentSortDirection = 'asc';
    }

    applySorting();
    renderTable();
    updateSortIndicators();
}

function applySorting() {
    filteredData.sort((a, b) => {
        let aVal, bVal;

        if (currentSortColumn === '# of Employees') {
            aVal = Number(a['# of Employees']);
            bVal = Number(b['# of Employees']);
        } else if (currentSortColumn === 'Prospect Score') {
            aVal = Number(a['Prospect Score']);
            bVal = Number(b['Prospect Score']);
        } else {
            aVal = a[currentSortColumn];
            bVal = b[currentSortColumn];
        }

        if (typeof aVal === 'string' && typeof bVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }

        if (aVal < bVal) return currentSortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return currentSortDirection === 'asc' ? 1 : -1;
        return 0;
    });
}

function updateSortIndicators() {
    document.querySelectorAll('.sort-indicator').forEach(indicator => {
        indicator.className = 'sort-indicator';
    });

    if (currentSortColumn) {
        const indicator = document.querySelector(`[data-sort="${currentSortColumn}"] .sort-indicator`);
        if (indicator) {
            indicator.classList.add(currentSortDirection);
        }
    }
}

function renderTable() {
    console.log('renderTable called, filteredData length:', filteredData.length);

    if (!resultsBody) {
        console.log('resultsBody not found!');
        return;
    }

    resultsBody.innerHTML = '';

    if (filteredData.length === 0) {
        resultsBody.innerHTML = `
            <tr>
                <td colspan="13" class="no-results">
                    <h3>No accounts found</h3>
                    <p>Try adjusting your filters to see more results.</p>
                </td>
            </tr>
        `;
        updateResultsCount(0);
        return;
    }

    filteredData.forEach(item => {
        const row = document.createElement('tr');
        const website = item.Website.startsWith('http') ? item.Website : `https://${item.Website}`;
        const linkedinURL = item.LinkedinURL || '#';

        row.innerHTML = `
            <td><strong>${escapeHtml(item['Company Name'])}</strong></td>
            <td>${escapeHtml(item['Who it is assigned to'] || 'Unassigned')}</td>
            <td><span class="status status--info">${escapeHtml(item['Account Type'] || 'N/A')}</span></td>
            <td><span style="${(item['Prospect Score'])}">${item['Prospect Score'] || 'N/A'}</span></td>
            <td>${escapeHtml(item['Account Notes'] || '')}</td>
            <td>${escapeHtml(item['Drop Notes'] || '')}</td>
            <td><a href="${website}" target="_blank">${escapeHtml(item.Website)}</a></td>
            <td>${item.LinkedinURL ? `<a href="${linkedinURL}" target="_blank">LinkedIn</a>` : 'N/A'}</td>
            <td><span class="${getRevenueClass(item['Revenue Estimate'])}">${escapeHtml(item['Revenue Estimate'])}</span></td>
            <td>${item['# of Employees'].toLocaleString()}</td>
            <td>${escapeHtml(item['Head Office'])}</td>
            <td>${escapeHtml(item.Country)}</td>
            <td><span class="status status--success">${escapeHtml(item.Segmentation || 'N/A')}</span></td>
        `;
        resultsBody.appendChild(row);
    });

    updateResultsCount(filteredData.length);
    highlightSearchTerms();
}

function exportToCSV() {
    if (filteredData.length === 0) {
        alert('No data to export. Please adjust your filters.');
        return;
    }

    const headers = [
        'Company Name', 'Assigned To', 'Account Type', 'Prospect Score', 'Account Notes',
        'Drop Notes', 'Website', 'LinkedIn URL', 'Revenue Estimate', 'Employees',
        'Head Office', 'Country', 'Segmentation'
    ];

    const csvRows = [
        headers.join(','),
        ...filteredData.map(item => headers.map(header => {
            const field = getCSVValue(item, header);
            return `"${field.replace(/"/g, '""')}"`;
        }).join(','))
    ];

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `zoominfo_accounts_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function getCSVValue(item, key) {
    switch (key) {
        case 'Company Name': return item['Company Name'];
        case 'Assigned To': return item['Who it is assigned to'];
        case 'Account Type': return item['Account Type'];
        case 'Prospect Score': return String(item['Prospect Score']);
        case 'Account Notes': return item['Account Notes'];
        case 'Drop Notes': return item['Drop Notes'];
        case 'Website': return item.Website;
        case 'LinkedIn URL': return item.LinkedinURL;
        case 'Revenue Estimate': return item['Revenue Estimate'];
        case 'Employees': return String(item['# of Employees']);
        case 'Head Office': return item['Head Office'];
        case 'Country': return item.Country;
        case 'Segmentation': return item.Segmentation;
        default: return '';
    }
}

function updateResultsCount(count) {
    if (resultsCount) {
        const total = zoomInfoData.length;
        resultsCount.textContent = `${count.toLocaleString()} of ${total.toLocaleString()} accounts found`;
    }
}

function showLoading() {
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
    }
}

function hideLoading() {
    if (loadingIndicator) {
        loadingIndicator.classList.add('hidden');
    }
}

function getRevenueClass(revenue) {
    if (revenue.includes('bil.') || revenue.includes('$500 mil. - $1 bil.') ||
        revenue.includes('$250 mil. - $500 mil.') || revenue.includes('$100 mil. - $250 mil.')) {
        return 'revenue-high';
    } else if (revenue.includes('$50 mil.') || revenue.includes('$25 mil.')) {
        return 'revenue-medium';
    }
    return 'revenue-low';
}

function getScoreStyle(score) {
    // Normalize between 0 and 100
    let normalized = Math.max(0, Math.min(100, score)) / 100;
    // Red (0) to Yellow (60) to Green (120)
    let hue = 0 + 120 * normalized;
    let saturation = 38;  // much lower, softer pastel
    let lightness = 91;   // very light background

    // Always use strong contrast for text
    let textColor = '#1a1a1a';

    return `background-color: hsl(${hue},${saturation}%,${lightness}%); color: ${textColor}; font-weight: bold; font-size: 1.05em; padding: 6px 10px; border-radius: 6px; min-width: 38px; display: inline-block; text-align: center; letter-spacing: 0.5px;`;
}


function highlightSearchTerms() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (!searchTerm) return;

    const regex = new RegExp(escapeRegex(searchTerm), 'gi');
    resultsBody.querySelectorAll('td').forEach(cell => {
        if (cell.querySelector('a')) return; // Don't break links
        const text = cell.textContent;
        if (regex.test(text)) {
            cell.innerHTML = text.replace(regex, match =>
                `<span class="search-highlight">${match}</span>`
            );
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

function escapeRegex(string) {
    return String(string).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
