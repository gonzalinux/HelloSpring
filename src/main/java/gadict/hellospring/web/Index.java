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
        return "index";
    }

    @GetMapping("/en/survey")
    public String enSurvey(Model model) {
        return "survey";
    }

    @GetMapping("/es/survey")
    public String esSurvey(Model model) {
        return "survey-es";
    }

    @GetMapping("/en/submitted")
    public String enSubmitted(Model model) {
        return "submitted";
    }

    @GetMapping("/es/submitted")
    public String esSubmitted(Model model) {
        return "submitted-es";
    }



}
