$(document).ready(function() {
    // Intialize Invoices
    $('#reports').DataTable( {
        "sDom": "<'row table-filter'<'show'l><'search'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row table-bottom'<'table-info'i><'table-pagination'p>>",
        "ajax": "/data/reports.json",
        "columns": [
            { "data": "date" },
            { "data": "status" },
            { "data": "prism" },
            { "data": "qb" },
            { "data": "rerun" }
        ],
        "createdRow": function( row, data, dataIndex ) {
            if ( data.status == "Failed" ) {
              $(row).addClass( 'failed' );
            }
          }
    } );
    // Initialize Journals
    $('#journals').DataTable( {
      "sDom": "<'row table-filter'<'show'l><'search'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row table-bottom'<'table-info'i><'table-pagination'p>>",
      "ajax": "/data/reports.json",
      "columns": [
          { "data": "date" },
          { "data": "status" },
          { "data": "prism" },
          { "data": "qb" },
          { "data": "rerun" }
      ],
      "createdRow": function( row, data, dataIndex ) {
          if ( data.status == "Failed" ) {
            $(row).addClass( 'failed' );
          }
        }
    } );
    // Initialize Receipts
    $('#receipts').DataTable( {
      "sDom": "<'row table-filter'<'show'l><'search'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row table-bottom'<'table-info'i><'table-pagination'p>>",
      "ajax": "/data/reports.json",
      "columns": [
          { "data": "date" },
          { "data": "status" },
          { "data": "prism" },
          { "data": "qb" },
          { "data": "rerun" }
      ],
      "createdRow": function( row, data, dataIndex ) {
          if ( data.status == "Failed" ) {
            $(row).addClass( 'failed' );
          }
        }
      } );
  // Initialize All Accounts
  $('#accounts').DataTable( {
    "sDom": "<'row table-filter'<'show'l><'search'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row table-bottom'<'table-info'i><'table-pagination'p>>",
    "ajax": "/data/quickbooks.json",
    "columns": [
        { "data": "code" },
        { "data": "field" }
    ]
    } );
  // Initialize All Departments
  $('#departments').DataTable( {
    "sDom": "<'row table-filter'<'show'l><'search'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row table-bottom'<'table-info'i><'table-pagination'p>>",
    "ajax": "/data/quickbooks.json",
    "columns": [
        { "data": "code" },
        { "data": "field" }
    ]
    } );
  // Initialize All Classes
  $('#classes').DataTable( {
    "sDom": "<'row table-filter'<'show'l><'search'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row table-bottom'<'table-info'i><'table-pagination'p>>",
    "ajax": "/data/quickbooks.json",
    "columns": [
        { "data": "code" },
        { "data": "field" }
    ]
    } );
} );


 // Rerun Button Test Ajax
 (function($) {
   $("#rerun").click(function(){
    $.ajax({
      url: "test.html",
      dataType: 'html',
      success: function(data){
        $('.content').append(data);
    }});
  });
})(jQuery);



