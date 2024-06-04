package gadict.hellospring.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.Random;

@Component
@Getter
public class RandomGenerator {

    private final Random random;

    public RandomGenerator(){
        this(100);
    }

    public RandomGenerator(int seed){
        random = new Random(seed);
    }

    public int generateNumber(){
        return random.nextInt();
    }


}
