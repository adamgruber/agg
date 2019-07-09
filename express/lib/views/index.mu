{{#yield-styles}}
<link rel='stylesheet' href='/stylesheets/agg.css' />
{{/yield-styles}}

{{> intro}}
{{> about}}
{{> portfolio}}
{{> resume}}
{{> footer}}

{{#yield-scripts}}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
  {{#isDev}}<script src="js/bundle.js"></script>{{/isDev}}
  {{^isDev}}<script src="js/bundle.min.js"></script>{{/isDev}}
{{/yield-scripts}}