package acceptance;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Ignore;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import backend.Application;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ContextConfiguration(classes = {Application.class})
@Ignore     // RunCukesTest runs it !
public class Stepdefs {

    @LocalServerPort
    private int port;

    @Autowired
    MockMvc mvc;

    @Given("^WebContext$")
    public void webcontext() throws Throwable {

    }

    ResultActions resultActions;

    @When("^User asks about status$")
    public void user_asks_about_status() throws Throwable {
        resultActions = mvc.perform(get("/status"));
    }

    @Then("^Application answers \"([^\"]*)\"$")
    public void application_answers(String expected) throws Throwable {
        resultActions.andExpect(content().string(expected));
        resultActions.andExpect(status().isOk());
    }

}
