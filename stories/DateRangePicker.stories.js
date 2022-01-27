export default {
    title: 'DateRangePicker',
    argTypes: {},
};

const DateRangePickerTemplate = () => {
    return `
        <h5>DatePicker</h5>
        <div class="example space-x-2">
            <div class="datepicker datepicker-daterange">
                <div class="calendar">
                    <header>
                        <button class="calendar-prev-month"></button>
                        <div class="calendar-month">
                            <button>January</button> 
                            <button>2022</button>
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
                            <button class="is-today">10</button>
                            <button>11</button>
                            <button>12</button>
                            <button>13</button>
                            <button>14</button>
                            <button>15</button>
                            <button>16</button>
                            <button>17</button>
                            <button>18</button>
                            <button>19</button>
                            <button>20</button>
                            <button>21</button>
                            <button>22</button>
                            <button>23</button>
                            <button>24</button>
                            <button>25</button>
                            <button>26</button>
                            <button>27</button>
                            <button class="is-range-start">28</button>
                            <button class="is-in-range">29</button>
                            <button class="is-in-range">30</button>
                            <button class="is-in-range">31</button>
                            <button class="is-future-month is-in-range">1</button>
                            <button class="is-future-month is-in-range">2</button>
                            <button class="is-future-month is-in-range">3</button>
                            <button class="is-future-month is-in-range">4</button>
                            <button class="is-future-month is-in-range">5</button>
                            <button class="is-future-month is-in-range">6</button>
                        </section>
                    </main>
                </div>
                <div class="calendar">
                    <header>
                        <div class="calendar-month">
                            <button>January</button> 
                            <button>2022</button>
                        </div>
                        <button class="calendar-next-month"></button>
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
                            <button class="is-past-month is-in-range">27</button>
                            <button class="is-past-month is-in-range">28</button>
                            <button class="is-past-month is-in-range">29</button>
                            <button class="is-past-month is-in-range">30</button>
                            <button class="is-past-month is-in-range">31</button>
                            <button class="is-in-range">1</button>
                            <button class="is-in-range">2</button>
                            <button class="is-in-range">3</button>
                            <button class="is-in-range">4</button>
                            <button class="is-range-end">5</button>
                            <button>6</button>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>10</button>
                            <button>11</button>
                            <button>12</button>
                            <button>13</button>
                            <button>14</button>
                            <button>15</button>
                            <button>16</button>
                            <button>17</button>
                            <button>18</button>
                            <button>19</button>
                            <button>20</button>
                            <button>21</button>
                            <button>22</button>
                            <button>23</button>
                            <button>24</button>
                            <button>25</button>
                            <button>26</button>
                            <button>27</button>
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
export const DateRangePicker = DateRangePickerTemplate.bind({});


const PopupTemplate = () => {
    return `
        <h5>DatePicker</h5>
        <div class="example space-x-2">
            <div class="datepicker datepicker-popup datepicker-daterange">
                <div class="calendar">
                    <header>
                        <button class="calendar-prev-month"></button>
                        <div class="calendar-month">
                            <button>January</button> 
                            <button>2022</button>
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
                            <button class="is-today">10</button>
                            <button>11</button>
                            <button>12</button>
                            <button>13</button>
                            <button>14</button>
                            <button>15</button>
                            <button>16</button>
                            <button>17</button>
                            <button>18</button>
                            <button>19</button>
                            <button>20</button>
                            <button>21</button>
                            <button>22</button>
                            <button>23</button>
                            <button>24</button>
                            <button>25</button>
                            <button>26</button>
                            <button>27</button>
                            <button class="is-range-start">28</button>
                            <button class="is-in-range">29</button>
                            <button class="is-in-range">30</button>
                            <button class="is-in-range">31</button>
                            <button class="is-future-month is-in-range">1</button>
                            <button class="is-future-month is-in-range">2</button>
                            <button class="is-future-month is-in-range">3</button>
                            <button class="is-future-month is-in-range">4</button>
                            <button class="is-future-month is-in-range">5</button>
                            <button class="is-future-month is-in-range">6</button>
                        </section>
                    </main>
                </div>
                <div class="calendar">
                    <header>
                        <div class="calendar-month">
                            <button>January</button> 
                            <button>2022</button>
                        </div>
                        <button class="calendar-next-month"></button>
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
                            <button class="is-past-month is-in-range">27</button>
                            <button class="is-past-month is-in-range">28</button>
                            <button class="is-past-month is-in-range">29</button>
                            <button class="is-past-month is-in-range">30</button>
                            <button class="is-past-month is-in-range">31</button>
                            <button class="is-in-range">1</button>
                            <button class="is-in-range">2</button>
                            <button class="is-in-range">3</button>
                            <button class="is-in-range">4</button>
                            <button class="is-range-end">5</button>
                            <button>6</button>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>10</button>
                            <button>11</button>
                            <button>12</button>
                            <button>13</button>
                            <button>14</button>
                            <button>15</button>
                            <button>16</button>
                            <button>17</button>
                            <button>18</button>
                            <button>19</button>
                            <button>20</button>
                            <button>21</button>
                            <button>22</button>
                            <button>23</button>
                            <button>24</button>
                            <button>25</button>
                            <button>26</button>
                            <button>27</button>
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
            <div class="datepicker datepicker-popup datepicker-daterange">
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
                        <button class="calendar-prev-month"></button>
                        <div class="calendar-month">
                            <button>January</button> 
                            <button>2022</button>
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
                            <button class="is-today">10</button>
                            <button>11</button>
                            <button>12</button>
                            <button>13</button>
                            <button>14</button>
                            <button>15</button>
                            <button>16</button>
                            <button>17</button>
                            <button>18</button>
                            <button>19</button>
                            <button>20</button>
                            <button>21</button>
                            <button>22</button>
                            <button>23</button>
                            <button>24</button>
                            <button>25</button>
                            <button>26</button>
                            <button>27</button>
                            <button class="is-range-start">28</button>
                            <button class="is-in-range">29</button>
                            <button class="is-in-range">30</button>
                            <button class="is-in-range">31</button>
                            <button class="is-future-month is-in-range">1</button>
                            <button class="is-future-month is-in-range">2</button>
                            <button class="is-future-month is-in-range">3</button>
                            <button class="is-future-month is-in-range">4</button>
                            <button class="is-future-month is-in-range">5</button>
                            <button class="is-future-month is-in-range">6</button>
                        </section>
                    </main>
                </div>
                <div class="calendar">
                    <header>
                        <div class="calendar-month">
                            <button>January</button> 
                            <button>2022</button>
                        </div>
                        <button class="calendar-next-month"></button>
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
                            <button class="is-past-month is-in-range">27</button>
                            <button class="is-past-month is-in-range">28</button>
                            <button class="is-past-month is-in-range">29</button>
                            <button class="is-past-month is-in-range">30</button>
                            <button class="is-past-month is-in-range">31</button>
                            <button class="is-in-range">1</button>
                            <button class="is-in-range">2</button>
                            <button class="is-in-range">3</button>
                            <button class="is-in-range">4</button>
                            <button class="is-range-end">5</button>
                            <button>6</button>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>10</button>
                            <button>11</button>
                            <button>12</button>
                            <button>13</button>
                            <button>14</button>
                            <button>15</button>
                            <button>16</button>
                            <button>17</button>
                            <button>18</button>
                            <button>19</button>
                            <button>20</button>
                            <button>21</button>
                            <button>22</button>
                            <button>23</button>
                            <button>24</button>
                            <button>25</button>
                            <button>26</button>
                            <button>27</button>
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
            <div class="datepicker datepicker-popup datepicker-daterange">
                <div class="daterange-body">
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
                            <button class="calendar-prev-month"></button>
                            <div class="calendar-month">
                                <button>January</button> 
                                <button>2022</button>
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
                                <button class="is-today">10</button>
                                <button>11</button>
                                <button>12</button>
                                <button>13</button>
                                <button>14</button>
                                <button>15</button>
                                <button>16</button>
                                <button>17</button>
                                <button>18</button>
                                <button>19</button>
                                <button>20</button>
                                <button>21</button>
                                <button>22</button>
                                <button>23</button>
                                <button>24</button>
                                <button>25</button>
                                <button>26</button>
                                <button>27</button>
                                <button class="is-range-start">28</button>
                                <button class="is-in-range">29</button>
                                <button class="is-in-range">30</button>
                                <button class="is-in-range">31</button>
                                <button class="is-future-month is-in-range">1</button>
                                <button class="is-future-month is-in-range">2</button>
                                <button class="is-future-month is-in-range">3</button>
                                <button class="is-future-month is-in-range">4</button>
                                <button class="is-future-month is-in-range">5</button>
                                <button class="is-future-month is-in-range">6</button>
                            </section>
                        </main>
                    </div>
                    <div class="calendar">
                        <header>
                            <div class="calendar-month">
                                <button>January</button> 
                                <button>2022</button>
                            </div>
                            <button class="calendar-next-month"></button>
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
                                <button class="is-past-month is-in-range">27</button>
                                <button class="is-past-month is-in-range">28</button>
                                <button class="is-past-month is-in-range">29</button>
                                <button class="is-past-month is-in-range">30</button>
                                <button class="is-past-month is-in-range">31</button>
                                <button class="is-in-range">1</button>
                                <button class="is-in-range">2</button>
                                <button class="is-in-range">3</button>
                                <button class="is-in-range">4</button>
                                <button class="is-range-end">5</button>
                                <button>6</button>
                                <button>7</button>
                                <button>8</button>
                                <button>9</button>
                                <button>10</button>
                                <button>11</button>
                                <button>12</button>
                                <button>13</button>
                                <button>14</button>
                                <button>15</button>
                                <button>16</button>
                                <button>17</button>
                                <button>18</button>
                                <button>19</button>
                                <button>20</button>
                                <button>21</button>
                                <button>22</button>
                                <button>23</button>
                                <button>24</button>
                                <button>25</button>
                                <button>26</button>
                                <button>27</button>
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
                <footer>
                    <button class="btn">Clear</button>
                    <button class="btn">Go to today</button>
                </footer>
            </div>
        </div>
    `;
};
export const WithActions = WithActionsTemplate.bind({});


const LargeTemplate = () => {
    return `
        <h5>DatePicker</h5>
        <div class="example space-x-2">
            <div class="datepicker datepicker-popup datepicker-daterange">
                <div class="daterange-body">
                    <aside>
                        <button>Select today</button>
                        <button>Yesterday</button>
                        <button class="active">7 days ago</button>
                        <button>30 days ago</button>
                        <button>5 month ago</button>
                        <button>a year ago</button>
                    </aside>
                    <div class="calendar calendar-lg">
                        <header>
                            <button class="calendar-prev-month"></button>
                            <div class="calendar-month">
                                <button>January</button> 
                                <button>2022</button>
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
                                <button class="is-today">10</button>
                                <button>11</button>
                                <button>12</button>
                                <button>13</button>
                                <button>14</button>
                                <button>15</button>
                                <button>16</button>
                                <button>17</button>
                                <button>18</button>
                                <button>19</button>
                                <button>20</button>
                                <button>21</button>
                                <button>22</button>
                                <button>23</button>
                                <button>24</button>
                                <button>25</button>
                                <button>26</button>
                                <button>27</button>
                                <button class="is-range-start">28</button>
                                <button class="is-in-range">29</button>
                                <button class="is-in-range">30</button>
                                <button class="is-in-range">31</button>
                                <button class="is-future-month is-in-range">1</button>
                                <button class="is-future-month is-in-range">2</button>
                                <button class="is-future-month is-in-range">3</button>
                                <button class="is-future-month is-in-range">4</button>
                                <button class="is-future-month is-in-range">5</button>
                                <button class="is-future-month is-in-range">6</button>
                            </section>
                        </main>
                    </div>
                    <div class="calendar calendar-lg">
                        <header>
                            <div class="calendar-month">
                                <button>January</button> 
                                <button>2022</button>
                            </div>
                            <button class="calendar-next-month"></button>
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
                                <button class="is-past-month is-in-range">27</button>
                                <button class="is-past-month is-in-range">28</button>
                                <button class="is-past-month is-in-range">29</button>
                                <button class="is-past-month is-in-range">30</button>
                                <button class="is-past-month is-in-range">31</button>
                                <button class="is-in-range">1</button>
                                <button class="is-in-range">2</button>
                                <button class="is-in-range">3</button>
                                <button class="is-in-range">4</button>
                                <button class="is-range-end">5</button>
                                <button>6</button>
                                <button>7</button>
                                <button>8</button>
                                <button>9</button>
                                <button>10</button>
                                <button>11</button>
                                <button>12</button>
                                <button>13</button>
                                <button>14</button>
                                <button>15</button>
                                <button>16</button>
                                <button>17</button>
                                <button>18</button>
                                <button>19</button>
                                <button>20</button>
                                <button>21</button>
                                <button>22</button>
                                <button>23</button>
                                <button>24</button>
                                <button>25</button>
                                <button>26</button>
                                <button>27</button>
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
                <footer>
                    <button class="btn">Clear</button>
                    <button class="btn">Go to today</button>
                </footer>
            </div>
        </div>
    `;
};
export const Large = LargeTemplate.bind({});
