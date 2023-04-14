import json

from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs

from controllers.getCitiesAQIFromQuery import getCitiesAQIFromQuery

SERVER_PORT = 5000


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)

        if parsed_url.path != "/api":
            self.send_error(404)
            return

        if "q" in query_params:
            q_value = query_params["q"][0]
        else:
            q_value = ""

        # Get and format response data
        response_data = getCitiesAQIFromQuery(q_value)
        response_json = json.dumps(response_data)

        # Set response headers and send it
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(bytes(response_json, "utf-8"))


web_server = HTTPServer(("127.0.0.1", SERVER_PORT), SimpleHTTPRequestHandler)
print("Backend Web server is listening on port {}...".format(SERVER_PORT))
web_server.serve_forever()
