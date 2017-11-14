package backend;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
class StatusController {

    @GetMapping("/status")
    @ResponseBody
    ResponseEntity<String> status() {
        return ResponseEntity.ok().body("I am working ...");
    }
}
