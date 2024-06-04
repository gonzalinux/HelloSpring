package gadict.hellospring.api;

import gadict.hellospring.utils.RandomGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/helloWorld")
public class HelloWorldHandler {

    private RandomGenerator randomGenerator;

    public HelloWorldHandler(final RandomGenerator randomGenerator){
        this.randomGenerator = randomGenerator;
    }

    @GetMapping
    public String helloWorld() {

        return "Hello World" + randomGenerator.generateNumber();

    }

}
