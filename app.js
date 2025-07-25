// ZoomInfo Account Data
const zoomInfoData = [
  {
    "Record ID": 1000,
    "Company Name": "Innovative Inc",
    "Revenue Range (in USD)": "$10 mil. - $25 mil.",
    "Employees": 82,
    "Company City": "Charlotte",
    "Company State": "North Carolina",
    "Company Country": "United States",
    "Primary Industry": "Healthcare",
    "Website": "www.innovativeinc.com",
    "Company HQ Phone": "(567) 890-1234",
    "Founded Year": 2010,
    "Full Address": "1234 Business Blvd, Charlotte, North Carolina, 28202, United States"
  },
  {
    "Record ID": 1001,
    "Company Name": "Global Corp", 
    "Revenue Range (in USD)": "$5 mil. - $10 mil.",
    "Employees": 39,
    "Company City": "Raleigh",
    "Company State": "North Carolina",
    "Company Country": "United States",
    "Primary Industry": "Retail",
    "Website": "www.globalcorp.com",
    "Company HQ Phone": "(919) 555-0123",
    "Founded Year": 2005,
    "Full Address": "5678 Tech Way, Raleigh, North Carolina, 27601, United States"
  },
  {
    "Record ID": 1002,
    "Company Name": "Fusion Group",
    "Revenue Range (in USD)": "$10 mil. - $25 mil.",
    "Employees": 21,
    "Company City": "Henderson", 
    "Company State": "Nevada",
    "Company Country": "United States",
    "Primary Industry": "Education",
    "Website": "www.fusiongroup.com",
    "Company HQ Phone": "(702) 888-9999",
    "Founded Year": 2015,
    "Full Address": "9876 Corporate Dr, Henderson, Nevada, 89052, United States"
  },
  {
    "Record ID": 1003,
    "Company Name": "Momentum Corp",
    "Revenue Range (in USD)": "$500,000 - $1 mil.",
    "Employees": 7,
    "Company City": "San Antonio",
    "Company State": "Texas", 
    "Company Country": "United States",
    "Primary Industry": "Business Services",
    "Website": "www.momentumcorp.com",
    "Company HQ Phone": "(210) 456-7890",
    "Founded Year": 2018,
    "Full Address": "3456 Oak Ave, San Antonio, Texas, 78201, United States"
  },
  {
    "Record ID": 1004,
    "Company Name": "Innovative Systems",
    "Revenue Range (in USD)": "$500,000 - $1 mil.",
    "Employees": 9,
    "Company City": "Denver",
    "Company State": "Colorado",
    "Company Country": "United States", 
    "Primary Industry": "Government",
    "Website": "www.innovativesystems.com",
    "Company HQ Phone": "(303) 123-4567",
    "Founded Year": 2019,
    "Full Address": "7890 Main St, Denver, Colorado, 80202, United States"
  },
  {
    "Record ID": 1005,
    "Company Name": "Apex Enterprises",
    "Revenue Range (in USD)": "$10 mil. - $25 mil.",
    "Employees": 40,
    "Company City": "Charlotte",
    "Company State": "North Carolina",
    "Company Country": "United States",
    "Primary Industry": "Government", 
    "Website": "www.apexenterprises.com",
    "Company HQ Phone": "(704) 987-6543",
    "Founded Year": 2008,
    "Full Address": "2468 Business Blvd, Charlotte, North Carolina, 28205, United States"
  },
  {
    "Record ID": 1006,
    "Company Name": "Velocity Ltd",
    "Revenue Range (in USD)": "Over $5 bil.",
    "Employees": 39993,
    "Company City": "Santa Ana",
    "Company State": "California",
    "Company Country": "United States",
    "Primary Industry": "Agriculture",
    "Website": "www.velocityltd.com", 
    "Company HQ Phone": "(714) 555-0101",
    "Founded Year": 1985,
    "Full Address": "1357 Corporate Dr, Santa Ana, California, 92701, United States"
  },
  {
    "Record ID": 1007,
    "Company Name": "Future Technologies",
    "Revenue Range (in USD)": "$50 mil. - $100 mil.",
    "Employees": 238,
    "Company City": "Bakersfield",
    "Company State": "California",
    "Company Country": "United States",
    "Primary Industry": "Transportation",
    "Website": "www.futuretechnologies.com",
    "Company HQ Phone": "(661) 234-5678",
    "Founded Year": 1995,
    "Full Address": "8642 Tech Way, Bakersfield, California, 93301, United States"
  },
  {
    "Record ID": 1008,
    "Company Name": "Synergy Systems", 
    "Revenue Range (in USD)": "$10 mil. - $25 mil.",
    "Employees": 36,
    "Company City": "Columbus",
    "Company State": "Ohio",
    "Company Country": "United States",
    "Primary Industry": "Agriculture",
    "Website": "www.synergysystems.com",
    "Company HQ Phone": "(614) 345-6789",
    "Founded Year": 2012,
    "Full Address": "9753 Oak Ave, Columbus, Ohio, 43215, United States"
  },
  {
    "Record ID": 1009,
    "Company Name": "Pioneer LLC",
    "Revenue Range (in USD)": "$10 mil. - $25 mil.", 
    "Employees": 55,
    "Company City": "Fort Worth",
    "Company State": "Texas",
    "Company Country": "United States",
    "Primary Industry": "Transportation",
    "Website": "www.pioneerllc.com",
    "Company HQ Phone": "(817) 456-7890",
    "Founded Year": 2003,
    "Full Address": "4567 Main St, Fort Worth, Texas, 76102, United States"
  },
  {
    "Record ID": 1010,
    "Company Name": "Dynamic Solutions",
    "Revenue Range (in USD)": "$25 mil. - $50 mil.",
    "Employees": 125,
    "Company City": "Seattle",
    "Company State": "Washington", 
    "Company Country": "United States",
    "Primary Industry": "Technology",
    "Website": "www.dynamicsolutions.com",
    "Company HQ Phone": "(206) 567-8901",
    "Founded Year": 2000,
    "Full Address": "1111 Business Blvd, Seattle, Washington, 98101, United States"
  },
  {
    "Record ID": 1011,
    "Company Name": "Strategic Partners",
    "Revenue Range (in USD)": "$100 mil. - $250 mil.",
    "Employees": 450,
    "Company City": "Chicago",
    "Company State": "Illinois",
    "Company Country": "United States", 
    "Primary Industry": "Finance",
    "Website": "www.strategicpartners.com",
    "Company HQ Phone": "(312) 678-9012",
    "Founded Year": 1992,
    "Full Address": "2222 Corporate Dr, Chicago, Illinois, 60601, United States"
  },
  {
    "Record ID": 1012,
    "Company Name": "Elite Manufacturing",
    "Revenue Range (in USD)": "$250 mil. - $500 mil.",
    "Employees": 1250,
    "Company City": "Detroit",
    "Company State": "Michigan",
    "Company Country": "United States",
    "Primary Industry": "Manufacturing", 
    "Website": "www.elitemanufacturing.com",
    "Company HQ Phone": "(313) 789-0123",
    "Founded Year": 1978,
    "Full Address": "3333 Industrial Way, Detroit, Michigan, 48201, United States"
  },
  {
    "Record ID": 1013,
    "Company Name": "Digital Media Group",
    "Revenue Range (in USD)": "$50 mil. - $100 mil.",
    "Employees": 180,
    "Company City": "Los Angeles",
    "Company State": "California",
    "Company Country": "United States",
    "Primary Industry": "Media & Internet",
    "Website": "www.digitalmediagroup.com",
    "Company HQ Phone": "(323) 890-1234",
    "Founded Year": 2005,
    "Full Address": "4444 Media Blvd, Los Angeles, California, 90210, United States"
  },
  {
    "Record ID": 1014,
    "Company Name": "Healthcare Innovations",
    "Revenue Range (in USD)": "$100 mil. - $250 mil.",
    "Employees": 650,
    "Company City": "Boston",
    "Company State": "Massachusetts",
    "Company Country": "United States",
    "Primary Industry": "Healthcare",
    "Website": "www.healthcareinnovations.com",
    "Company HQ Phone": "(617) 901-2345",
    "Founded Year": 1988,
    "Full Address": "5555 Medical Center Dr, Boston, Massachusetts, 02101, United States"
  },
  {
    "Record ID": 1015,
    "Company Name": "Energy Solutions Inc",
    "Revenue Range (in USD)": "$500 mil. - $1 bil.",
    "Employees": 2800,
    "Company City": "Houston", 
    "Company State": "Texas",
    "Company Country": "United States",
    "Primary Industry": "Energy, Utilities & Waste",
    "Website": "www.energysolutionsinc.com",
    "Company HQ Phone": "(713) 012-3456",
    "Founded Year": 1975,
    "Full Address": "6666 Energy Way, Houston, Texas, 77002, United States"
  },
  {
    "Record ID": 1016,
    "Company Name": "Construction Masters",
    "Revenue Range (in USD)": "$25 mil. - $50 mil.",
    "Employees": 95,
    "Company City": "Phoenix",
    "Company State": "Arizona",
    "Company Country": "United States",
    "Primary Industry": "Construction",
    "Website": "www.constructionmasters.com",
    "Company HQ Phone": "(602) 123-4567",
    "Founded Year": 1998,
    "Full Address": "7777 Construction Ave, Phoenix, Arizona, 85001, United States"
  },
  {
    "Record ID": 1017,
    "Company Name": "Telecom Networks",
    "Revenue Range (in USD)": "$100 mil. - $250 mil.",
    "Employees": 520,
    "Company City": "Atlanta",
    "Company State": "Georgia",
    "Company Country": "United States",
    "Primary Industry": "Telecommunications",
    "Website": "www.telecomnetworks.com",
    "Company HQ Phone": "(404) 234-5678",
    "Founded Year": 1990,
    "Full Address": "8888 Network Dr, Atlanta, Georgia, 30301, United States"
  },
  {
    "Record ID": 1018,
    "Company Name": "Real Estate Pros",
    "Revenue Range (in USD)": "$10 mil. - $25 mil.",
    "Employees": 35,
    "Company City": "Miami",
    "Company State": "Florida",
    "Company Country": "United States",
    "Primary Industry": "Real Estate",
    "Website": "www.realestatepros.com",
    "Company HQ Phone": "(305) 345-6789",
    "Founded Year": 2010,
    "Full Address": "9999 Real Estate Blvd, Miami, Florida, 33101, United States"
  },
  {
    "Record ID": 1019,
    "Company Name": "Retail Giants",
    "Revenue Range (in USD)": "$250 mil. - $500 mil.",
    "Employees": 1800,
    "Company City": "Minneapolis",
    "Company State": "Minnesota",
    "Company Country": "United States",
    "Primary Industry": "Retail",
    "Website": "www.retailgiants.com",
    "Company HQ Phone": "(612) 456-7890",
    "Founded Year": 1985,
    "Full Address": "1010 Retail Way, Minneapolis, Minnesota, 55401, United States"
  }
];

// Global variables
let filteredData = [...zoomInfoData];
let currentSortColumn = null;
let currentSortDirection = 'asc';

// DOM elements - declared globally for access
let revenueFilter, minEmployeesInput, maxEmployeesInput, locationFilter, 
    searchInput, resultsBody, resultsCount, clearFiltersBtn, exportDataBtn, loadingIndicator;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
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

    // Setup the application
    populateLocationFilter();
    attachEventListeners();
    
    // Initialize with all data visible
    filteredData = [...zoomInfoData];
    renderTable();
});

// Populate location filter with unique cities
function populateLocationFilter() {
    const uniqueCities = [...new Set(zoomInfoData.map(item => item['Company City']))].sort();
    locationFilter.innerHTML = ''; // Clear first
    
    uniqueCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        locationFilter.appendChild(option);
    });
}

// Attach all event listeners
function attachEventListeners() {
    revenueFilter.addEventListener('change', handleFilterChange);
    locationFilter.addEventListener('change', handleFilterChange);
    minEmployeesInput.addEventListener('input', debounce(handleFilterChange, 300));
    maxEmployeesInput.addEventListener('input', debounce(handleFilterChange, 300));
    searchInput.addEventListener('input', debounce(handleFilterChange, 300));
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    exportDataBtn.addEventListener('click', exportToCSV);
    
    // Table sorting
    document.querySelectorAll('[data-sort]').forEach(header => {
        header.addEventListener('click', () => sortTable(header.dataset.sort));
    });
}

// Handle filter changes
function handleFilterChange() {
    showLoading();
    
    setTimeout(() => {
        applyAllFilters();
        renderTable();
        hideLoading();
    }, 50);
}

// Apply all active filters to the data
function applyAllFilters() {
    let data = [...zoomInfoData]; // Start fresh each time

    // Revenue filter
    const selectedRevenues = getSelectedOptions(revenueFilter);
    if (selectedRevenues.length > 0) {
        data = data.filter(item => selectedRevenues.includes(item['Revenue Range (in USD)']));
    }

    // Employee count filter
    const minEmployees = parseInt(minEmployeesInput.value) || 0;
    const maxEmployees = parseInt(maxEmployeesInput.value) || Number.MAX_SAFE_INTEGER;
    
    data = data.filter(item => {
        const empCount = item.Employees;
        return empCount >= minEmployees && empCount <= maxEmployees;
    });

    // Location filter
    const selectedCities = getSelectedOptions(locationFilter);
    if (selectedCities.length > 0) {
        data = data.filter(item => selectedCities.includes(item['Company City']));
    }

    // Search filter
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        data = data.filter(item => {
            return Object.values(item).some(value => 
                String(value).toLowerCase().includes(searchTerm)
            );
        });
    }

    filteredData = data;

    // Apply sort if active
    if (currentSortColumn) {
        applySorting();
    }
}

// Get selected options from a multi-select element
function getSelectedOptions(selectElement) {
    return Array.from(selectElement.selectedOptions).map(option => option.value);
}

// Clear all filters and reset to initial state
function clearAllFilters() {
    // Clear all form inputs
    revenueFilter.selectedIndex = -1;
    locationFilter.selectedIndex = -1;
    minEmployeesInput.value = '';
    maxEmployeesInput.value = '';
    searchInput.value = '';
    
    // Reset sort state
    currentSortColumn = null;
    currentSortDirection = 'asc';
    updateSortIndicators();
    
    // Reset to full dataset
    filteredData = [...zoomInfoData];
    renderTable();
}

// Sort table by specified column
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

// Apply current sorting to filtered data
function applySorting() {
    filteredData.sort((a, b) => {
        let aVal, bVal;

        if (currentSortColumn === 'Location') {
            aVal = `${a['Company City']}, ${a['Company State']}`;
            bVal = `${b['Company City']}, ${b['Company State']}`;
        } else {
            aVal = a[currentSortColumn];
            bVal = b[currentSortColumn];
        }

        // Numeric comparison for employees
        if (currentSortColumn === 'Employees') {
            aVal = Number(aVal);
            bVal = Number(bVal);
        } else if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }

        if (aVal < bVal) return currentSortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return currentSortDirection === 'asc' ? 1 : -1;
        return 0;
    });
}

// Update visual sort indicators
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

// Render the data table
function renderTable() {
    if (!resultsBody) return;
    
    resultsBody.innerHTML = '';

    if (filteredData.length === 0) {
        resultsBody.innerHTML = `
            <tr>
                <td colspan="7" class="no-results">
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
        const location = `${item['Company City']}, ${item['Company State']}`;
        const website = item.Website.startsWith('http') ? item.Website : `https://${item.Website}`;
        
        row.innerHTML = `
            <td><strong>${escapeHtml(item['Company Name'])}</strong></td>
            <td><span class="${getRevenueClass(item['Revenue Range (in USD)'])}">${escapeHtml(item['Revenue Range (in USD)'])}</span></td>
            <td>${item.Employees.toLocaleString()}</td>
            <td>${escapeHtml(location)}</td>
            <td>${escapeHtml(item['Primary Industry'])}</td>
            <td>${escapeHtml(item['Company HQ Phone'])}</td>
            <td><a href="${website}" target="_blank">${escapeHtml(item.Website)}</a></td>
        `;
        resultsBody.appendChild(row);
    });

    updateResultsCount(filteredData.length);
    highlightSearchTerms();
}

// Export current filtered data to CSV
function exportToCSV() {
    if (filteredData.length === 0) {
        alert('No data to export. Please adjust your filters.');
        return;
    }

    const headers = [
        'Company Name', 'Revenue Range', 'Employees', 'City', 'State', 
        'Industry', 'Phone', 'Website', 'Founded Year', 'Full Address'
    ];

    const csvRows = [
        headers.join(','),
        ...filteredData.map(item => [
            `"${item['Company Name']}"`,
            `"${item['Revenue Range (in USD)']}"`,
            item.Employees,
            `"${item['Company City']}"`,
            `"${item['Company State']}"`,
            `"${item['Primary Industry']}"`,
            `"${item['Company HQ Phone']}"`,
            `"${item.Website}"`,
            item['Founded Year'],
            `"${item['Full Address']}"`
        ].join(','))
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

// Update the results count display
function updateResultsCount(count) {
    if (resultsCount) {
        const total = zoomInfoData.length;
        resultsCount.textContent = `${count.toLocaleString()} of ${total.toLocaleString()} accounts found`;
    }
}

// Show loading indicator
function showLoading() {
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
    }
}

// Hide loading indicator
function hideLoading() {
    if (loadingIndicator) {
        loadingIndicator.classList.add('hidden');
    }
}

// Get CSS class for revenue styling
function getRevenueClass(revenue) {
    if (revenue.includes('bil.') || revenue.includes('$500 mil. - $1 bil.') || 
        revenue.includes('$250 mil. - $500 mil.') || revenue.includes('$100 mil. - $250 mil.')) {
        return 'revenue-high';
    } else if (revenue.includes('$50 mil.') || revenue.includes('$25 mil.')) {
        return 'revenue-medium';
    }
    return 'revenue-low';
}

// Highlight search terms in the table
function highlightSearchTerms() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (!searchTerm) return;

    const regex = new RegExp(escapeRegex(searchTerm), 'gi');
    resultsBody.querySelectorAll('td').forEach(cell => {
        const text = cell.textContent;
        if (regex.test(text)) {
            cell.innerHTML = text.replace(regex, match => 
                `<span class="search-highlight">${match}</span>`
            );
        }
    });
}

// Utility functions
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