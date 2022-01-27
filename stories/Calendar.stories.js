const { CHEVRON_RIGHT, CHEVRON_LEFT } = require('../src/icons');

export default {
    title: 'Calendar',
};

const Template = () => {
    return `
        <h5>Calendar</h5>
        <div class="example space-x-2">
            <div class="calendar">
                <header>
                    <div class="calendar-month">
                        <button>January</button> 
                        <button>2022</button>
                    </div>
                    <div class="calendar-month-pager">
                        <button></button>
                        <button></button>
                    </div>
                </header>
                <main>
                    <section class="calendar-weekdays">
                        <div>Mo</div>
                        <div>Tu</div>
                        <div>We</div>
                        <div>Th</div>
                        <div>Fr</div>
                        <div>Sa</div>
                        <div>Su</div>
                    </section>
                    <section class="calendar-days">
                        <button class="is-past-month">27</button>
                        <button class="is-past-month">28</button>
                        <button class="is-past-month">29</button>
                        <button class="is-past-month">30</button>
                        <button class="is-past-month">31</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button class="is-selected">10</button>
                        <button>11</button>
                        <button>12</button>
                        <button>13</button>
                        <button>14</button>
                        <button>15</button>
                        <button>16</button>
                        <button>17</button>
                        <button>18</button>
                        <button>19</button>
                        <button class="is-excluded">20</button>
                        <button class="is-excluded">21</button>
                        <button>22</button>
                        <button>23</button>
                        <button class="is-excluded">24</button>
                        <button>25</button>
                        <button>26</button>
                        <button class="is-today">27</button>
                        <button>28</button>
                        <button>29</button>
                        <button>30</button>
                        <button>31</button>
                        <button class="is-future-month">1</button>
                        <button class="is-future-month">2</button>
                        <button class="is-future-month">3</button>
                        <button class="is-future-month">4</button>
                        <button class="is-future-month">5</button>
                        <button class="is-future-month">6</button>
                    </section>
                </main>
            </div>
        </div>
    `;
};
export const Calendar = Template.bind({});

const MonthPagerTemplate = () => {
    return `
        <h5>Calendar</h5>
        <div class="example space-x-2">
            <div class="calendar">
                <header>
                    <div class="calendar-month">
                        <button class="dropdown">January</button> 
                        <button class="dropdown">2022</button>
                    </div>
                    <div class="calendar-month-pager">
                        <button></button>
                        <button></button>
                    </div>
                </header>
                <main>
                    <section class="calendar-weekdays">
                        <div>Mo</div>
                        <div>Tu</div>
                        <div>We</div>
                        <div>Th</div>
                        <div>Fr</div>
                        <div>Sa</div>
                        <div>Su</div>
                    </section>
                    <section class="calendar-days">
                        <button class="is-past-month">27</button>
                        <button class="is-past-month">28</button>
                        <button class="is-past-month">29</button>
                        <button class="is-past-month">30</button>
                        <button class="is-past-month">31</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button class="is-selected">10</button>
                        <button>11</button>
                        <button>12</button>
                        <button>13</button>
                        <button>14</button>
                        <button>15</button>
                        <button>16</button>
                        <button>17</button>
                        <button>18</button>
                        <button>19</button>
                        <button class="is-excluded">20</button>
                        <button class="is-excluded">21</button>
                        <button>22</button>
                        <button>23</button>
                        <button class="is-excluded">24</button>
                        <button>25</button>
                        <button>26</button>
                        <button class="is-today">27</button>
                        <button>28</button>
                        <button>29</button>
                        <button>30</button>
                        <button>31</button>
                        <button class="is-future-month">1</button>
                        <button class="is-future-month">2</button>
                        <button class="is-future-month">3</button>
                        <button class="is-future-month">4</button>
                        <button class="is-future-month">5</button>
                        <button class="is-future-month">6</button>
                    </section>
                </main>
            </div>
        </div>
    `;
};
export const MonthPager = MonthPagerTemplate.bind({});


const RangeSelectionTemplate = () => {
    return `
        <h5>Calendar</h5>
        <div class="example space-x-2">
            <div class="calendar">
                <header>
                    <div class="calendar-month">
                        <button>January</button> 
                        <button>2022</button>
                    </div>
                    <div class="calendar-month-pager">
                        <button></button>
                        <button></button>
                    </div>
                </header>
                <main>
                    <section class="calendar-weekdays">
                        <div>Mo</div>
                        <div>Tu</div>
                        <div>We</div>
                        <div>Th</div>
                        <div>Fr</div>
                        <div>Sa</div>
                        <div>Su</div>
                    </section>
                    <section class="calendar-days">
                        <button class="is-past-month">27</button>
                        <button class="is-past-month">28</button>
                        <button class="is-past-month">29</button>
                        <button class="is-past-month">30</button>
                        <button class="is-past-month">31</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>10</button>
                        <button>11</button>
                        <button class="is-range-start">12</button>
                        <button class="is-in-range">13</button>
                        <button class="is-in-range">14</button>
                        <button class="is-in-range">15</button>
                        <button class="is-range-end">16</button>
                        <button>17</button>
                        <button>18</button>
                        <button>19</button>
                        <button class="is-excluded">20</button>
                        <button class="is-excluded">21</button>
                        <button>22</button>
                        <button>23</button>
                        <button class="is-excluded">24</button>
                        <button>25</button>
                        <button>26</button>
                        <button class="is-today">27</button>
                        <button>28</button>
                        <button>29</button>
                        <button>30</button>
                        <button>31</button>
                        <button class="is-future-month">1</button>
                        <button class="is-future-month">2</button>
                        <button class="is-future-month">3</button>
                        <button class="is-future-month">4</button>
                        <button class="is-future-month">5</button>
                        <button class="is-future-month">6</button>
                    </section>
                </main>
            </div>
        </div>
    `;
};
export const RangeSelection = RangeSelectionTemplate.bind({});


const LargeTemplate = () => {
    return `
        <h5>Calendar</h5>
        <div class="example space-x-2">
            <div class="calendar calendar-lg">
                <header>
                    <div class="calendar-month">
                        <button>January</button> 
                        <button>2022</button>
                    </div>
                    <div class="calendar-month-pager">
                        <button></button>
                        <button></button>
                    </div>
                </header>
                <main>
                    <section class="calendar-weekdays">
                        <div>Mo</div>
                        <div>Tu</div>
                        <div>We</div>
                        <div>Th</div>
                        <div>Fr</div>
                        <div>Sa</div>
                        <div>Su</div>
                    </section>
                    <section class="calendar-days">
                        <button class="is-past-month">27</button>
                        <button class="is-past-month">28</button>
                        <button class="is-past-month">29</button>
                        <button class="is-past-month">30</button>
                        <button class="is-past-month">31</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button class="is-selected">10</button>
                        <button>11</button>
                        <button>12</button>
                        <button>13</button>
                        <button>14</button>
                        <button>15</button>
                        <button>16</button>
                        <button>17</button>
                        <button>18</button>
                        <button>19</button>
                        <button class="is-excluded">20</button>
                        <button class="is-excluded">21</button>
                        <button>22</button>
                        <button>23</button>
                        <button class="is-excluded">24</button>
                        <button>25</button>
                        <button>26</button>
                        <button class="is-today">27</button>
                        <button>28</button>
                        <button>29</button>
                        <button>30</button>
                        <button>31</button>
                        <button class="is-future-month">1</button>
                        <button class="is-future-month">2</button>
                        <button class="is-future-month">3</button>
                        <button class="is-future-month">4</button>
                        <button class="is-future-month">5</button>
                        <button class="is-future-month">6</button>
                    </section>
                </main>
            </div>
        </div>
    `;
};
export const Large = LargeTemplate.bind({});
