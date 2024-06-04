package gadict.hellospring.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class Index {

    @GetMapping
    public String index(Model model) {
        model.addAttribute("message", "hola2 klk");
        return "root";
    }
}
