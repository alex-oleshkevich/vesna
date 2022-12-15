export default {
    title: 'DatePicker',
    argTypes: {},
};

const DatePickerTemplate = () => {
    return `
        <h5>DatePicker</h5>
        <div class="example space-x-2">
            <div class="datepicker">
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
        </div>
    `;
};
export const DatePicker = DatePickerTemplate.bind({});

const PopupTemplate = () => {
    return `
        <h5>DatePicker</h5>
        <div class="example space-x-2">
            <div class="datepicker datepicker-popup">
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
        </div>
    `;
};
export const Popup = PopupTemplate.bind({});


const WithShortcutsTemplate = () => {
    return `
        <h5>DatePicker</h5>
        <div class="example space-x-2">
            <div class="datepicker datepicker-popup">
                <aside>
                    <button>Select today</button>
                    <button>Yesterday</button>
                    <button class="active">7 days ago</button>
                    <button>30 days ago</button>
                    <button>5 month ago</button>
                    <button>a year ago</button>
                </aside>
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
        </div>
    `;
};
export const WithShortcuts = WithShortcutsTemplate.bind({});



const WithActionsTemplate = () => {
    return `
        <h5>DatePicker</h5>
        <div class="example space-x-2">
            <div class="datepicker datepicker-popup">
                <aside>
                    <button>Select today</button>
                    <button>Yesterday</button>
                    <button class="active">7 days ago</button>
                    <button>30 days ago</button>
                    <button>5 month ago</button>
                    <button>a year ago</button>
                </aside>
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
                    <footer>
                        <button class="btn">Clear</button>
                        <button class="btn">Go to today</button>
                    </footer>
                </div>
            </div>
        </div>
    `;
};
export const WithActions = WithActionsTemplate.bind({});
