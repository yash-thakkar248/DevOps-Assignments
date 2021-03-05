using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EdSheeran : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "<br>When I was six years old I broke my leg<br>I was running from my brother and his friends<br>And tasted the sweet perfume of the mountain grass I rolled down<br><br>I was younger then<br>Take me back to when<br><br>I found my heart and broke it here<br>Made friends and lost them through the years<br>And I've not seen the roaring fields in so long<br>I know I've grown<br>But I can't wait to go home<br><br>I'm on my way<br>Driving at 90 down those country lanes<br>Singing to &quot;Tiny Dancer&quot;<br>And I miss the way<br>You make me feel<br>And it's real<br>When we watched the sunset over the castle on the hill<br><br>Fifteen years old and smoking hand-rolled cigarettes<br>Running from the law through the backfields and getting drunk with my friends<br>Had my first kiss on a Friday night<br>I don't reckon that I did it right<br><br>I was younger then,<br>Take me back to when<br><br>We found weekend jobs, when we got paid<br>We'd buy cheap spirits and drink them straight<br>Me and my friends have not thrown up in so long<br>Oh, how we've grown<br>But I can't wait to go home<br><br>I'm on my way<br>Driving at 90 down those country lanes<br>Singing to &quot;Tiny Dancer&quot;<br>And I miss the way<br>You make me feel<br>And it's real<br>When we watched the sunset over the castle on the hill<br>Over the castle on the hill<br>Over the castle on the hill<br><br>";
        }
    }
}
