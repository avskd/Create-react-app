// $(document).ready(function() {
//     const UCLS = uclsData();
//     const tableData = UCLS.getData();
//     const columns = [
//         { data: 'mac', width: '10%', responsivePriority: 1 },
//         { data: 'deviceType', width: '09%', responsivePriority: 4 },
//         { data: 'deviceModel', width: '09%', responsivePriority: 5 },
//         { data: 'assetID', width: '09%', responsivePriority: 8 },
//         { data: 'lastSeen', width: '12%', responsivePriority: 6 },
//         { data: 'usageState', width: '10%', className: 'align-center', responsivePriority: 3 },
//         { data: 'location', width: '10%', responsivePriority: 7 },
//         { data: 'report', width: '20%', responsivePriority: 2 }
//     ];

//     function sparkIt() {
//         $('.line-spark:not(:has(canvas))').sparkline('html', {
//             type: 'line',
//             lineColor: '#2185D0',
//             fillColor: '#2185D0',
//             width: '270px',
//             height: '22px',
//             tooltipContainer: '.hide',
//             spotColor: false,
//             minSpotColor: false,
//             maxSpotColor: false,
//             disableInteraction: true
//         });

//         $('.bar-spark:not(:has(canvas))').sparkline('html', {
//             type: 'bar',
//             barColor: '#d62d20',
//             negBarColor: '#',
//             stackedBarColor: [],
//             tooltipContainer: '.hide',
//             zeroColor: '#ffffff',
//             disableInteraction: true,
//             height: '22px',
//             barWidth: 8
//         });
//         $('[data-content]').popup({
//             position: 'top center',
//             closable: false
//         });
//         addDownloadEvent();
//     }

//     let datatable = $('.tag-table').DataTable({
//         autoWidth: false,
//         stateSave: true,
//         data: tableData,
//         columns: columns,
//         fnInitComplete: sparkIt,
//         responsive: true
//     });

//     datatable.on( 'search.dt', function () {
//         console.log('Not found');
//         setTimeout(function () {
//             sparkIt();
//         }, 2000);

//     });

//     setInterval(function() {
//         datatable.destroy();
//         datatable = null;
//         let newData = UCLS.refreshData();
//         datatable = $('.tag-table').DataTable({
//             autoWidth: false,
//             stateSave: true,
//             data: newData,
//             columns: columns,
//             fnInitComplete: sparkIt,
//             responsive: true
//         });
//     }, 30000);

//     function addDownloadEvent() {
//         console.log('Removed click events');
//         $('[data-id]').off( "click" );
//         console.log('Added click events');
//         $('[data-id]').click(function() {
//             let element = $(this);
//             UCLS.downloadCSV(element.attr('data-id'));
//         });
//     }
// });